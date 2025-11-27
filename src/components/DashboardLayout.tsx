'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiHome,
  FiCheckSquare,
  FiUsers,
  FiMessageSquare,
  FiMenu,
  FiX,
  FiBell,
  FiLogOut,
  FiSearch,
} from 'react-icons/fi'
import { GiPlantSeed } from 'react-icons/gi'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('soilsmart_user')
    if (!storedUser) {
      router.push('/login')
    } else {
      setUser(JSON.parse(storedUser))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('soilsmart_user')
    router.push('/')
  }

  const navItems = [
    { name: 'Home', href: '/dashboard', icon: FiHome },
    { name: 'Tasks', href: '/dashboard/tasks', icon: FiCheckSquare },
    { name: 'Community Hub', href: '/dashboard/community', icon: FiUsers },
    { name: 'Your soil', href: '/dashboard/monitoring', icon: GiPlantSeed },
    { name: 'Messages', href: '/dashboard/messages', icon: FiMessageSquare },
  ]

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#16a34a] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#15803d] shadow-xl z-50 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[#166534]">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <GiPlantSeed className="text-[#16a34a] text-2xl" />
            </div>
            <span className="text-xl font-bold font-display text-white">
              SoilSmart
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href === '/dashboard' && pathname === '/dashboard')
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-[#16a34a] text-white font-semibold'
                    : 'text-white/80 hover:bg-[#166534] hover:text-white'
                }`}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Log out Link */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#166534]">
          <button
            onClick={handleLogout}
            className="w-full text-left text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-[#166534] transition-colors text-sm font-medium flex items-center gap-2"
          >
            <FiLogOut className="text-lg" />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 bg-gray-50 min-h-screen">
        {/* Top Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {sidebarOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4 ml-auto">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                <FiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts, farmers"
                  className="bg-transparent border-none outline-none text-sm text-gray-600 w-40"
                />
              </div>
              <button className="relative text-gray-600 hover:text-gray-900">
                <FiBell className="text-xl" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-10 h-10 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-[#15803d] transition-colors">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
