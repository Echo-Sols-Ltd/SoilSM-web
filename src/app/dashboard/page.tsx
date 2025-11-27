'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { 
  FiSun, 
  FiDroplet, 
  FiClock,
  FiCheck,
  FiPlus,
  FiMessageSquare,
  FiFileText,
  FiUsers
} from 'react-icons/fi'
import { format } from 'date-fns'

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Apply organic compost', completed: false },
    { id: 2, text: 'Check irrigation system', completed: false },
    { id: 3, text: 'Monitor soil pH levels', completed: true },
  ])

  const announcements = [
    {
      id: 1,
      title: 'New Feature: Smart Irrigation',
      description: 'Automate your irrigation system based on real-time soil data.',
      link: 'Read More'
    },
    {
      id: 2,
      title: 'Community Event: Farmer Meetup',
      description: 'Join us this Saturday for a community gathering and knowledge sharing.',
      link: 'Read More'
    },
    {
      id: 3,
      title: 'Seasonal Tips: Spring Planting',
      description: 'Best practices for spring planting season are now available.',
      link: 'Read More'
    },
  ]

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const currentDate = format(new Date(), 'EEEE, MMMM d, yyyy')
  const currentTime = format(new Date(), 'h:mm a')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-display mb-2">Dashboard</h1>
            <p className="text-gray-600">Your soil's daily story, powered by smart sensors.</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="text-right">
              <p className="text-sm text-gray-600">{currentDate}</p>
              <p className="text-lg font-semibold text-gray-900">{currentTime}</p>
            </div>
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Temperature */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FiSun className="text-2xl text-orange-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">30°C</h3>
            <p className="text-sm text-gray-600">Temperature</p>
          </div>

          {/* Overall Soil Health */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <FiDroplet className="text-2xl text-green-600" />
              </div>
            </div>
            <div className="relative w-20 h-20 mb-2">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${76 * 2 * Math.PI * 36 / 100} ${2 * Math.PI * 36}`}
                  className="text-green-600"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">76</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Overall Soil Health</p>
          </div>

          {/* Today's Water Usage */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FiDroplet className="text-2xl text-blue-600" />
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-gray-900">1.24L</span>
                <span className="text-sm text-gray-500">/ 1.5L</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(1.24 / 1.5) * 100}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">Today's Water Usage</p>
          </div>

          {/* Next Irrigation */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FiClock className="text-2xl text-purple-600" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">2h 45 min</h3>
            <p className="text-sm text-gray-600">Next Irrigation</p>
          </div>
        </div>

        {/* Latest Announcements */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 font-display">Latest Announcements</h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className="border-l-4 border-primary-500 pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{announcement.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{announcement.description}</p>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  {announcement.link} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* My Tasks and Quick Actions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Tasks */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 font-display">My Tasks</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                <FiPlus className="text-sm" />
                Add Task
              </button>
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? 'bg-primary-600 border-primary-600'
                        : 'border-gray-300 hover:border-primary-600'
                    }`}
                  >
                    {task.completed && <FiCheck className="text-white text-xs" />}
                  </button>
                  <span 
                    className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-display">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <FiPlus className="text-2xl text-gray-600 group-hover:text-primary-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">Add Task</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <FiMessageSquare className="text-2xl text-gray-600 group-hover:text-primary-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">Ask AI</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <FiFileText className="text-2xl text-gray-600 group-hover:text-primary-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">View Reports</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group">
                <FiUsers className="text-2xl text-gray-600 group-hover:text-primary-600 mb-2" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">Meet Options</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
