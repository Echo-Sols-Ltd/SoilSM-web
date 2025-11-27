'use client'

import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { GiPlantRoots, GiWaterDrop, GiArtificialIntelligence } from 'react-icons/gi'

const Hero = () => {
  const floatingIcons = [
    { Icon: GiPlantRoots, delay: 0, position: 'top-20 left-10' },
    { Icon: GiWaterDrop, delay: 0.2, position: 'top-40 right-20' },
    { Icon: GiArtificialIntelligence, delay: 0.4, position: 'bottom-32 left-20' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} text-primary-200 opacity-20`}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon className="text-6xl md:text-8xl" />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                🌱 Smart Agriculture Technology
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
              Empowering Farmers with{' '}
              <span className="text-gradient">Data-Driven Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your farming with affordable soil monitoring, smart irrigation, and AI-powered guidance. 
              Join the agricultural revolution in Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Get Started
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600">Farmers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">50%</div>
                <div className="text-sm text-gray-600">Yield Increase</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">30%</div>
                <div className="text-sm text-gray-600">Water Saved</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Central Circle */}
              <motion.div
                className="absolute w-64 h-64 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <GiPlantRoots className="text-white text-8xl" />
              </motion.div>

              {/* Orbiting Elements */}
              {[0, 120, 240].map((rotation, index) => (
                <motion.div
                  key={index}
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
                  style={{ rotate: rotation }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    {index === 0 && <GiWaterDrop className="text-blue-500 text-3xl" />}
                    {index === 1 && <GiArtificialIntelligence className="text-purple-500 text-3xl" />}
                    {index === 2 && <GiPlantRoots className="text-green-500 text-3xl" />}
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

export default Hero

