'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiCheck, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

const WhyChooseUs = () => {
  const values = [
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We bring the long-term health and resource balance',
    },
    {
      icon: '🤝',
      title: 'Community',
      description: "Farmers' trust, and local guardians working hand in hand",
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Simple UI and sensor tech that works offline, anywhere',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Placeholder for farm image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <span className="text-9xl mb-4 block">🌾</span>
                  <p className="text-2xl font-bold">Thriving Green Farm</p>
                  <p className="text-green-100 mt-2">Sustainable Agriculture in Action</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-gray-600 text-sm mb-4">
              <span className="w-8 h-px bg-gray-400"></span>
              About us
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why choose us?
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Soilsmart began with a simple idea: what if the soil itself could guide the farmer?
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We saw the immense economic and community burden created billowed to make soil health visible, actionable, and accessible — even next knowledge.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              From local hubs to global partnerships, we're building tools that empower smallholder farmers to save water, grow more, and protect their land for the next generation.
            </p>

            {/* Value Cards */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

