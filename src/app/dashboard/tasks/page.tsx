'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { FiCheck, FiLightbulb } from 'react-icons/fi'
import Link from 'next/link'

interface Task {
  id: number
  text: string
  time: string
  status: 'completed' | 'pending' | 'maintenance'
  completed: boolean
}

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState<'today' | 'calendar' | 'reminders'>('today')
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Irrigate 1.8L Evening 9 PM', time: '9:00 PM', status: 'completed', completed: true },
    { id: 2, text: 'Apply organic compost Morning 8 AM', time: '8:00 AM', status: 'pending', completed: false },
    { id: 3, text: 'Plant Maize Seeds Afternoon 2 PM', time: '2:00 PM', status: 'completed', completed: true },
    { id: 4, text: 'Checking Irrigation System Evening 6 PM', time: '6:00 PM', status: 'maintenance', completed: false },
    { id: 5, text: 'Checking Irrigation System Evening 6 PM', time: '6:00 PM', status: 'maintenance', completed: false },
  ])

  const completedCount = tasks.filter(t => t.completed).length
  const totalCount = tasks.length

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 text-green-700',
      pending: 'bg-gray-100 text-gray-700',
      maintenance: 'bg-orange-100 text-orange-700',
    }
    return styles[status as keyof typeof styles] || styles.pending
  }

  const getStatusText = (status: string) => {
    const texts: { [key: string]: string } = {
      completed: 'Completed',
      pending: 'Pending',
      maintenance: 'Maintenance',
    }
    return texts[status] || 'Pending'
  }

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 px-3 sm:px-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display mb-1 sm:mb-2">Tasks</h1>
            <p className="text-sm sm:text-base text-gray-600">"What should I do today?" - one tap, one answer.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2">
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('today')}
              className={`flex-1 px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === 'today'
                  ? 'bg-[#16a34a] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Today's Tasks
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex-1 px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === 'calendar'
                  ? 'bg-[#16a34a] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Planning calendar
            </button>
            <button
              onClick={() => setActiveTab('reminders')}
              className={`flex-1 px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                activeTab === 'reminders'
                  ? 'bg-[#16a34a] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reminders
            </button>
          </div>
        </div>

        {/* Today's Progress */}
        {activeTab === 'today' && (
          <>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Today's progress</h3>
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  {completedCount} of {totalCount} completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#16a34a] h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                />
              </div>
            </div>

            {/* Task List */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                        task.completed
                          ? 'bg-[#16a34a] border-[#16a34a]'
                          : 'border-gray-300 hover:border-[#16a34a]'
                      }`}
                    >
                      {task.completed && <FiCheck className="text-white text-xs sm:text-sm" />}
                    </button>
                    <div className="flex-1">
                      <p
                        className={`text-sm sm:text-base font-medium ${
                          task.completed ? 'line-through text-gray-400' : 'text-gray-900'
                        }`}
                      >
                        {task.text}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{task.time}</p>
                    </div>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusBadge(
                        task.status
                      )}`}
                    >
                      {getStatusText(task.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Suggestion */}
            <div className="bg-[#15803d] rounded-xl shadow-lg p-4 sm:p-6 text-white">
              <div className="flex items-start gap-3 sm:gap-4">
                <FiLightbulb className="text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">AI Suggestion</h3>
                  <p className="text-sm sm:text-base opacity-90">
                    Based on your soil, try adding compost tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Planning Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <p className="text-gray-600 text-center py-8">Calendar view coming soon...</p>
          </div>
        )}

        {/* Reminders Tab */}
        {activeTab === 'reminders' && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <p className="text-gray-600 text-center py-8">Reminders view coming soon...</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

