'use client'

import Link from 'next/link'
import { GiPlantSeed } from 'react-icons/gi'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Case Studies', href: '#case-studies' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press Kit', href: '#press' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Community', href: '#community' },
      { name: 'Support', href: '#support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Licenses', href: '#licenses' },
    ],
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Echo-Sols-Ltd', label: 'GitHub' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-[#14532d] text-gray-300">
      <div className="container-custom py-8 sm:py-12 md:py-16 px-4 sm:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="bg-[#16a34a] p-1.5 sm:p-2 rounded-lg">
                <GiPlantSeed className="text-white text-xl sm:text-2xl" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-display text-white">
                Soil<span className="text-[#4ade80]">Smart</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
              Empowering African farmers with affordable, data-driven tools for sustainable agriculture 
              and improved crop yields.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <FiMail className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@soilsmart.com" className="hover:text-[#4ade80] transition-colors break-all">
                  info@soilsmart.com
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <FiPhone className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                <a href="tel:+250123456789" className="hover:text-[#4ade80] transition-colors">
                  +250 123 456 789
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <FiMapPin className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#4ade80] transition-colors text-xs sm:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#4ade80] transition-colors text-xs sm:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#4ade80] transition-colors text-xs sm:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#4ade80] transition-colors text-xs sm:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#166534] pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Echo Solutions Ltd. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#166534] hover:bg-[#16a34a] rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm sm:text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
