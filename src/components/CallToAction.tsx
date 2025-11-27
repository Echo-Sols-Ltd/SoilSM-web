'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const CallToAction = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-3 sm:mb-4">
            Let's Grow Smarter Together!
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-0">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FiMail className="text-green-700 text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Email Us</h4>
                  <p className="text-xs sm:text-sm text-gray-600">info@soilsmart.com</p>
                  <p className="text-xs sm:text-sm text-gray-600">support@soilsmart.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FiPhone className="text-green-700 text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Call Us</h4>
                  <p className="text-xs sm:text-sm text-gray-600">+250 788 123 456</p>
                  <p className="text-xs sm:text-sm text-gray-600">Mon-Fri: 8AM - 6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FiMapPin className="text-green-700 text-lg sm:text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Visit Us</h4>
                  <p className="text-xs sm:text-sm text-gray-600">KG 123 St, Kigali</p>
                  <p className="text-xs sm:text-sm text-gray-600">Rwanda, East Africa</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors text-xs sm:text-sm font-bold">
                  f
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors text-xs sm:text-sm font-bold">
                  𝕏
                </a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors text-xs sm:text-sm font-bold">
                  in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 order-1 lg:order-2"
          >
            <form className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 sm:py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Send Message
                <FiSend className="text-sm sm:text-base" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
