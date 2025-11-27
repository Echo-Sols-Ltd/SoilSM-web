'use client'

import { motion } from 'framer-motion'
import { GiPlantSeed } from 'react-icons/gi'
import { FiTarget, FiActivity, FiZap, FiCpu, FiUsers } from 'react-icons/fi'

const Objectives = () => {
  const objectives = [
    {
      icon: FiActivity,
      title: 'Monitor Soil Health',
      description: 'Real-time monitoring using affordable sensors to track moisture, pH, nutrients, and temperature.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: FiZap,
      title: 'Automate Delivery',
      description: 'Smart automation for water and compost delivery based on real-time soil data and crop needs.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: FiCpu,
      title: 'AI-Powered Guidance',
      description: 'Intelligent recommendations for planting, fertilization, pest control, and harvest timing.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: FiUsers,
      title: 'Community Sharing',
      description: 'Platform for farmers to share knowledge, best practices, and agricultural technology.',
      gradient: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FiTarget />
            Our Solution
          </div>
          <h2 className="section-title">
            <span className="text-gradient">SoilSmart</span> Objectives
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Closing the gap with affordable, data-driven tools for sustainable and effective soil management
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${objective.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <objective.icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{objective.description}</p>

                {/* Hover Effect */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${objective.gradient} transition-all duration-300 rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary-50 px-6 py-4 rounded-2xl">
            <GiPlantSeed className="text-primary-600 text-3xl" />
            <p className="text-lg font-semibold text-gray-900">
              Join <span className="text-primary-600">10,000+</span> farmers already using SoilSmart
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Objectives

