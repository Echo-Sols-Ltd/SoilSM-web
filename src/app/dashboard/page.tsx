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
  FiUsers,
  FiX,
  FiCalendar,
  FiSearch,
  FiBell
} from 'react-icons/fi'
import { format } from 'date-fns'
import Link from 'next/link'

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Apply organic compost', completed: false },
    { id: 2, text: 'Check irrigation system', completed: false },
    { id: 3, text: 'Monitor soil pH levels', completed: true },
  ])
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const [newTask, setNewTask] = useState({
    name: '',
    date: '',
    time: '',
    description: '',
  })

  const announcements = [
    {
      id: 1,
      title: 'New AI Soil Analysis Update Released',
      description: 'Get more accurate soil health insights with our latest AI update.',
      link: 'Read more'
    },
    {
      id: 2,
      title: 'Rainy Week Ahead',
      description: 'Weather forecast shows rain expected this week. Plan accordingly.',
      link: 'Read more'
    },
    {
      id: 3,
      title: 'Join the 30-day Soil Challenge',
      description: 'Improve your soil health in just 30 days with our guided program.',
      link: 'Read more'
    },
  ]

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.name.trim()) {
      setTasks([...tasks, {
        id: tasks.length + 1,
        text: newTask.name,
        completed: false,
      }])
      setNewTask({ name: '', date: '', time: '', description: '' })
      setShowAddTaskModal(false)
    }
  }

  const currentDate = format(new Date(), 'EEEE, MMMM d, yyyy')
  const currentTime = format(new Date(), 'h:mm a')

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 px-3 sm:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display mb-1 sm:mb-2">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600">Your soil's daily story, powered by smart sensors.</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-0">
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
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
              U
            </div>
          </div>
        </div>

        {/* Weather/Location Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="text-sm sm:text-base text-gray-600">{currentDate}</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">Ruyenzi, Komonyi</p>
            </div>
            <div className="flex items-center gap-2">
              <FiSun className="text-orange-500 text-xl sm:text-2xl" />
              <span className="text-base sm:text-lg font-semibold text-gray-900">30°C Sunny cloudy</span>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Overall Soil Health */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-green-100 rounded-lg">
                <FiDroplet className="text-xl sm:text-2xl text-green-600" />
              </div>
            </div>
            <div className="mb-2">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">76%</div>
              <p className="text-xs sm:text-sm text-gray-600">Overall Soil Health</p>
              <p className="text-xs text-gray-500 mt-1">Last updated 2 minutes ago</p>
            </div>
          </div>

          {/* Today's Water Usage */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                <FiDroplet className="text-xl sm:text-2xl text-blue-600" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm sm:text-base text-gray-600 mb-1">Used 245L</p>
              <p className="text-sm sm:text-base text-gray-600 mb-1">Saved 89L</p>
              <p className="text-xs sm:text-sm font-semibold text-green-600">73% efficiency today</p>
            </div>
          </div>

          {/* Next Irrigation */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
                <FiClock className="text-xl sm:text-2xl text-purple-600" />
              </div>
            </div>
            <div className="mb-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">2h 45 min</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">Zone A tomatoes</p>
              <button className="text-xs sm:text-sm bg-[#16a34a] text-white px-3 py-1 rounded-lg hover:bg-[#15803d] transition-colors">
                Do it now
              </button>
            </div>
          </div>

          {/* Temperature */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-orange-100 rounded-lg">
                <FiSun className="text-xl sm:text-2xl text-orange-600" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">30°C</h3>
            <p className="text-xs sm:text-sm text-gray-600">Temperature</p>
          </div>
        </div>

        {/* Latest Announcements */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 font-display">Latest Announcements</h2>
          <div className="space-y-3 sm:space-y-4">
            {announcements.map((announcement) => (
              <div 
                key={announcement.id}
                className="border-l-4 border-[#16a34a] pl-3 sm:pl-4 py-2 hover:bg-gray-50 rounded-r-lg transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{announcement.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{announcement.description}</p>
                <a href="#" className="text-xs sm:text-sm text-[#16a34a] hover:text-[#15803d] font-medium">
                  {announcement.link} →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* My Tasks and Quick Actions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* My Tasks */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-display">My Tasks</h2>
              <button 
                onClick={() => setShowAddTaskModal(true)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#16a34a] text-white rounded-lg hover:bg-[#15803d] transition-colors text-xs sm:text-sm font-medium"
              >
                <FiPlus className="text-xs sm:text-sm" />
                <span className="hidden xs:inline">Add Task</span>
                <span className="xs:hidden">Add</span>
              </button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                      task.completed
                        ? 'bg-[#16a34a] border-[#16a34a]'
                        : 'border-gray-300 hover:border-[#16a34a]'
                    }`}
                  >
                    {task.completed && <FiCheck className="text-white text-xs" />}
                  </button>
                  <span 
                    className={`flex-1 text-sm sm:text-base ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}
                  >
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 font-display">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button 
                onClick={() => setShowAddTaskModal(true)}
                className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-[#16a34a] hover:bg-green-50 transition-all group"
              >
                <FiPlus className="text-xl sm:text-2xl text-gray-600 group-hover:text-[#16a34a] mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#16a34a] text-center">Add Task</span>
              </button>
              <Link href="/dashboard/ai-chat" className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-[#16a34a] hover:bg-green-50 transition-all group">
                <FiMessageSquare className="text-xl sm:text-2xl text-gray-600 group-hover:text-[#16a34a] mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#16a34a] text-center">Ask AI</span>
              </Link>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-[#16a34a] hover:bg-green-50 transition-all group">
                <FiFileText className="text-xl sm:text-2xl text-gray-600 group-hover:text-[#16a34a] mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#16a34a] text-center">View Reports</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-[#16a34a] hover:bg-green-50 transition-all group">
                <FiUsers className="text-xl sm:text-2xl text-gray-600 group-hover:text-[#16a34a] mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#16a34a] text-center">Post Update</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Add a task</h2>
              <button
                onClick={() => setShowAddTaskModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="text-2xl" />
              </button>
            </div>
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label htmlFor="taskName" className="block text-sm font-medium text-gray-700 mb-2">
                  Task name
                </label>
                <input
                  id="taskName"
                  type="text"
                  value={newTask.name}
                  onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all"
                  placeholder="Enter task name"
                  required
                />
              </div>
              <div>
                <label htmlFor="taskDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <div className="relative">
                  <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="taskDate"
                    type="date"
                    value={newTask.date}
                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="taskTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <div className="relative">
                  <FiClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="taskTime"
                    type="time"
                    value={newTask.time}
                    onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="taskDescription"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all resize-none"
                  placeholder="Enter task description"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
