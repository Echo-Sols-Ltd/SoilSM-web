'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMessageSquare, FiMic } from 'react-icons/fi'
import DashboardLayout from '@/components/DashboardLayout'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const aiResponses: { [key: string]: string } = {
    'soil moisture': 'Based on your current sensor data, your soil moisture level is at 45%, which is within the optimal range for most crops. However, Field B East is showing 25% moisture, which is below optimal. I recommend increasing irrigation in that area.',
    'irrigation': 'Your irrigation schedule is currently set to water twice daily. Based on recent weather patterns and soil conditions, I suggest adjusting to once daily in the morning for Field A, and increasing to three times for Field B East due to lower moisture levels.',
    'ph': 'Your soil pH levels are currently at 6.5, which is ideal for most crops. This is a healthy neutral range that promotes good nutrient availability. Continue monitoring weekly to maintain this balance.',
    'fertilizer': 'Based on your soil analysis, I recommend applying nitrogen-rich fertilizer to Field B. The ideal application rate would be 40-50 kg/hectare. Best time to apply is early morning when temperatures are cooler.',
    'pest': 'I notice favorable conditions for aphid activity based on current temperature and humidity. I recommend: 1) Regular monitoring of crops, especially undersides of leaves, 2) Consider introducing beneficial insects like ladybugs, 3) Neem oil spray if infestation occurs.',
    'weather': 'The forecast shows rain expected tomorrow afternoon. I recommend: 1) Reduce irrigation today, 2) Check drainage systems, 3) Plan for reduced field access tomorrow, 4) Good opportunity for natural soil moisture replenishment.',
    'crop': 'Based on your location and soil conditions, I recommend maize and beans as primary crops. These are well-suited to your soil pH and moisture levels. Maize typically yields 4-6 tons/hectare in your conditions. Consider crop rotation to maintain soil health.',
    'default': "I understand you're asking about farm management. Could you be more specific? I can help with: soil analysis, irrigation scheduling, fertilizer recommendations, pest control, crop selection, or weather-based advice.",
  }

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [keyword, response] of Object.entries(aiResponses)) {
      if (lowerMessage.includes(keyword) && keyword !== 'default') {
        return response
      }
    }
    
    return aiResponses['default']
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(input),
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display mb-1 sm:mb-2">SoilSmart AI Chat</h1>
          <p className="text-sm sm:text-base text-gray-600">Your soil's daily story, powered by smart sensors.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          style={{ minHeight: 'calc(100vh - 250px)' }}
        >
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8" style={{ minHeight: 'calc(100vh - 350px)' }}>
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What can I help with?</h2>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl p-4 ${
                        message.sender === 'user'
                          ? 'bg-[#16a34a] text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm sm:text-base leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 rounded-2xl p-4">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t p-4 sm:p-6 bg-gray-50">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Message SoilSmart AI"
                  className="w-full px-4 py-3 sm:py-4 pr-20 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-2">
                  <FiMic className="text-xl" />
                </button>
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <FiSend className="text-xl" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
