'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiSmartphone, FiBarChart2, FiCloud, FiBell, FiDollarSign } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: FiSmartphone,
      title: 'Mobile-First Design',
      description: 'Access all features from your smartphone, even in remote areas with limited connectivity.',
    },
    {
      icon: FiBarChart2,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards showing soil health trends, crop performance, and resource usage.',
    },
    {
      icon: FiCloud,
      title: 'Cloud-Based Platform',
      description: 'Secure data storage and synchronization across all your devices.',
    },
    {
      icon: FiBell,
      title: 'Smart Alerts',
      description: 'Receive timely notifications about irrigation needs, pest risks, and optimal harvest times.',
    },
    {
      icon: FiDollarSign,
      title: 'Affordable Pricing',
      description: 'Flexible payment plans designed for small-scale and large-scale farmers.',
    },
    {
      icon: FiCheckCircle,
      title: 'Proven Results',
      description: 'Join thousands of farmers who have increased yields by up to 50% using SoilSmart.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Powerful Features for Modern Farming</h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to transform your agricultural practices and maximize productivity
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <feature.icon className="text-primary-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

