'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Features = () => {
  const services = [
    {
      title: 'Soil Testing',
      description: 'Get comprehensive soil analysis with our advanced testing technology to optimize your farming.',
      image: '/images/414b4422a7252fce9cc35e06ef2e0367.jpg',
      bgGradient: 'from-green-600 to-green-700',
    },
    {
      title: 'Smart Irrigation',
      description: 'Automated water management system that saves up to 30% water while improving crop yields.',
      image: '/images/470188c19df5b72272dfd3048ffe1fc7.jpg',
      bgGradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Crop Monitoring',
      description: 'Real-time crop health monitoring with AI-powered insights and recommendations.',
      image: '/images/95d225cd0eaeb990224ee01db5bb59e2.jpg',
      bgGradient: 'from-amber-600 to-orange-600',
    },
    {
      title: 'NPK Fertilizers',
      description: 'Customized fertilizer recommendations based on your soil composition and crop needs.',
      image: '/images/Best Organic Fertilizers for Summer Growth are a… 1.png',
      bgGradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Water Management',
      description: 'Efficient water distribution and conservation strategies for sustainable agriculture.',
      image: '/images/470188c19df5b72272dfd3048ffe1fc7.jpg',
      bgGradient: 'from-teal-600 to-cyan-600',
    },
    {
      title: 'Sustainable Farming',
      description: 'Eco-friendly farming practices that protect the environment and increase productivity.',
      image: '/images/800px-Agriculture_in_Vietnam_with_farmers.jpg',
      bgGradient: 'from-green-700 to-emerald-700',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            Explore our wide range of services
          </h2>
          <div className="flex justify-center">
            <button className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors">
              Browse Catalogue
            </button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${service.bgGradient}`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <button className="text-green-700 font-semibold hover:text-green-800 transition-colors flex items-center gap-2 group">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white text-lg mb-6">
            Ready to transform your farming with our comprehensive services?
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors shadow-lg">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
