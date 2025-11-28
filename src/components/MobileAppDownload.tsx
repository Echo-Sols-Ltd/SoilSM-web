'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiSmartphone, FiDownload, FiCheck } from 'react-icons/fi'

const MobileAppDownload = () => {
  const features = [
    'Real-time soil monitoring',
    'Offline mode support',
    'AI-powered recommendations',
    'Community sharing',
  ]

  return (
    <section id="mobile-app" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center px-4 sm:px-0">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#16a34a]/10 text-[#16a34a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <FiSmartphone className="text-sm sm:text-base" />
              Mobile App
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Download <span className="text-[#16a34a]">SoilSmart</span> Mobile App
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Take your farming management on the go. Monitor soil health, receive AI recommendations, and connect with the farming community—all from your mobile device.
            </p>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16a34a] rounded-full flex items-center justify-center">
                    <FiCheck className="text-white text-sm" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.soilsmart.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.5,14.5L15.07,12.06L17.5,9.63L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-sm sm:text-base font-semibold">Google Play</span>
              </a>
              <a
                href="https://apps.apple.com/app/soilsmart/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05,20.28L14.18,23.22C13.03,24.37 11.37,24.37 10.22,23.22L4.95,17.96C4.17,17.19 4.17,15.94 4.95,15.17L7.82,12.22C8.97,11.07 10.63,11.07 11.78,12.22L17.05,17.5C17.83,18.27 17.83,19.53 17.05,20.28M19.3,9.25L12.78,2.64C11.63,1.5 9.97,1.5 8.82,2.64L5.95,5.58C5.17,6.36 5.17,7.61 5.95,8.39L12.47,15C13.63,16.15 15.28,16.15 16.43,15L19.3,12.06C20.08,11.29 20.08,10.03 19.3,9.25Z" />
                </svg>
                <span className="text-sm sm:text-base font-semibold">App Store</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 sm:p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen */}
                  <div className="relative aspect-[9/19.5] bg-gradient-to-br from-[#16a34a] to-[#15803d]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <FiSmartphone className="text-4xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">SoilSmart</h3>
                      <p className="text-sm text-center opacity-90">Smart Farming in Your Pocket</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#16a34a]/20 rounded-full blur-3xl hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#4ade80]/20 rounded-full blur-3xl hidden md:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppDownload


