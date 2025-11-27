'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiCheck, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiAward,
      title: 'Expert Knowledge',
      description: 'Our team of agricultural experts brings decades of experience in soil science and sustainable farming.',
    },
    {
      icon: FiUsers,
      title: 'Community Support',
      description: 'Join a thriving community of farmers who share insights and best practices for success.',
    },
    {
      icon: FiTrendingUp,
      title: 'Proven Results',
      description: 'Over 10,000 farmers have increased their yields by an average of 50% using our platform.',
    },
  ]

  const benefits = [
    'Real-time soil health monitoring with IoT sensors',
    'AI-powered recommendations tailored to your crops',
    'Automated irrigation scheduling based on weather data',
    'Expert support available 24/7 via chat or phone',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Why Choose Us?
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Farm with Smart Technology
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with agricultural expertise to help you make data-driven decisions 
              that increase yields, reduce costs, and promote sustainable farming practices.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <FiCheck className="text-green-700 text-sm" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* Reason Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <reason.icon className="text-green-700 text-xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{reason.title}</h3>
                  <p className="text-xs text-gray-600">{reason.description}</p>
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

