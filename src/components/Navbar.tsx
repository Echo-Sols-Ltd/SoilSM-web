'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { GiPlantSeed } from 'react-icons/gi'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ]

  const sectionIds = navLinks.map(link => link.href.replace('#', ''))
  const activeSection = useScrollSpy(sectionIds, 100)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <div className="bg-primary-600 p-1.5 sm:p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
              <GiPlantSeed className="text-white text-xl sm:text-2xl" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-display text-gray-900">
              Soil<span className="text-primary-600">Smart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-600 font-bold' 
                      : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/60 animate-pulse"></span>
                  )}
                </button>
              )
            })}
            <Link href="/login">
              <button className="btn-secondary mr-2 sm:mr-3 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">Sign In</button>
            </Link>
            <Link href="/signup">
              <button className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3">Get Started</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left font-medium transition-all duration-300 py-2 rounded-r-lg ${
                      isActive 
                        ? 'text-cyan-600 font-bold border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50 to-blue-50 pl-3 pr-4 shadow-sm' 
                        : 'text-gray-700 hover:text-cyan-500 hover:bg-gray-50 pl-4 pr-4'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
              <Link href="/login" onClick={() => setIsOpen(false)} className="block">
                <button className="btn-secondary w-full mb-3">Sign In</button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)} className="block">
                <button className="btn-primary w-full">Get Started</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

