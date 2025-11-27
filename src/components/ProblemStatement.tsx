'use client'

import { motion } from 'framer-motion'
import { FiAlertCircle, FiTrendingDown, FiDroplet, FiHelpCircle } from 'react-icons/fi'

const ProblemStatement = () => {
  const problems = [
    {
      icon: FiTrendingDown,
      title: 'Declining Soil Fertility',
      description: 'Continuous farming without proper soil management leads to nutrient depletion and reduced productivity.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: FiDroplet,
      title: 'Poor Irrigation Practices',
      description: 'Inefficient water usage and lack of proper irrigation systems result in crop stress and water waste.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: FiHelpCircle,
      title: 'Limited Modern Guidance',
      description: 'Traditional methods rely on guesswork, lacking access to data-driven insights and expert advice.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ]

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FiAlertCircle />
            The Challenge
          </div>
          <h2 className="section-title">The Problem We're Solving</h2>
          <p className="section-subtitle mx-auto mt-4">
            Farmers across Africa face critical challenges that threaten food security and livelihoods
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className={`${problem.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <problem.icon className={`${problem.color} text-3xl`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Climate change is making these challenges worse
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Without smart solutions, soil degradation and low productivity will continue to harm livelihoods 
            and local economies, leaving communities vulnerable and threatening food security.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemStatement

