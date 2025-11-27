'use client'

import { motion } from 'framer-motion'
import { FiMail, FiArrowRight } from 'react-icons/fi'
import { GiPlantSeed } from 'react-icons/gi'

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <GiPlantSeed className="absolute top-10 left-10 text-9xl text-white animate-float" />
        <GiPlantSeed className="absolute bottom-10 right-10 text-9xl text-white animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join thousands of farmers who are already benefiting from smart, sustainable agriculture. 
            Get started today and see the difference data-driven farming can make.
          </p>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Get Started
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

