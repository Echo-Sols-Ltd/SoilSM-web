'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'

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
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center px-4 sm:px-0">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Farm Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/800px-Agriculture_in_Vietnam_with_farmers.jpg"
                alt="Thriving Green Farm - Sustainable Agriculture in Action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 block">🌾</span>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Thriving Green Farm</p>
                  <p className="text-green-100 text-sm sm:text-base">Sustainable Agriculture in Action</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements - Hidden on mobile */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-600 rounded-full opacity-20 blur-3xl hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-green-400 rounded-full opacity-20 blur-3xl hidden md:block"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-px bg-gray-400"></span>
              About us
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why choose us?
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Soilsmart began with a simple idea: what if the soil itself could guide the farmer?
            </p>
            
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              We saw the immense economic and community burden created billowed to make soil health visible, actionable, and accessible — even next knowledge.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              From local hubs to global partnerships, we're building tools that empower smallholder farmers to save water, grow more, and protect their land for the next generation.
            </p>

            {/* Value Cards */}
            <div className="space-y-4 sm:space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="text-3xl sm:text-4xl flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
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
