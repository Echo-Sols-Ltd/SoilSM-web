'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMessageSquare } from 'react-icons/fi'
import DashboardLayout from '@/components/DashboardLayout'

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your SoilSmart AI assistant. I can help you with soil analysis, crop recommendations, irrigation schedules, and pest management. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ])
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

  const quickQuestions = [
    "What's my soil moisture level?",
    "Should I water my crops today?",
    "Recommend a fertilizer schedule",
    "Help with pest control",
    "Analyze my crop health",
  ]

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          style={{ height: 'calc(100vh - 200px)' }}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FiMessageSquare className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Assistant</h2>
                <p className="text-primary-100 text-sm">Always here to help with your farming needs</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ height: 'calc(100% - 240px)' }}>
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
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
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

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about your farm..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

