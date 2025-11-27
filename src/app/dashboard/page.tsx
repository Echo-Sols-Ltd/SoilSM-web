'use client'

import { motion } from 'framer-motion'
import {
  FiActivity,
  FiDroplet,
  FiThermometer,
  FiTrendingUp,
  FiAlertCircle,
  FiCheck,
} from 'react-icons/fi'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import DashboardLayout from '@/components/DashboardLayout'
import { soilMoistureData, temperatureData, sampleSensors, aiRecommendations, notifications } from '@/lib/sampleData'

export default function DashboardPage() {
  const stats = [
    {
      name: 'Active Sensors',
      value: '4',
      change: '+2',
      icon: FiActivity,
      color: 'bg-blue-500',
    },
    {
      name: 'Avg Soil Moisture',
      value: '45%',
      change: '+3%',
      icon: FiDroplet,
      color: 'bg-cyan-500',
    },
    {
      name: 'Temperature',
      value: '24°C',
      change: '+1°C',
      icon: FiThermometer,
      color: 'bg-orange-500',
    },
    {
      name: 'Yield Improvement',
      value: '32%',
      change: '+12%',
      icon: FiTrendingUp,
      color: 'bg-green-500',
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome back! 🌱</h2>
          <p className="text-primary-100 text-lg">
            Your farm is looking healthy. Here's your overview for today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <span className="text-green-600 text-sm font-semibold">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.name}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Soil Moisture Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Soil Moisture Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={soilMoistureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#16a34a"
                  strokeWidth={2}
                  name="Current"
                  dot={{ fill: '#16a34a', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="optimal"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Optimal"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Temperature Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Temperature Range</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#f97316" name="Avg Temp" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Sensors & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Sensors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Active Sensors</h3>
            <div className="space-y-3">
              {sampleSensors.map((sensor) => (
                <div
                  key={sensor.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        sensor.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{sensor.name}</p>
                      <p className="text-sm text-gray-500">{sensor.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      {sensor.value}
                      {sensor.unit}
                    </p>
                    <p className="text-xs text-gray-500">Battery: {sensor.battery}%</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI Recommendations</h3>
            <div className="space-y-3">
              {aiRecommendations.map((rec) => (
                <div
                  key={rec.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    rec.priority === 'high'
                      ? 'bg-red-50 border-red-500'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{rec.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                      <p className="text-sm text-gray-600">{rec.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {notifications.slice(0, 3).map((notif) => (
              <div
                key={notif.id}
                className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div
                  className={`p-2 rounded-full ${
                    notif.type === 'alert'
                      ? 'bg-red-100 text-red-600'
                      : notif.type === 'success'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {notif.type === 'alert' ? (
                    <FiAlertCircle />
                  ) : notif.type === 'success' ? (
                    <FiCheck />
                  ) : (
                    <FiActivity />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{notif.title}</h4>
                  <p className="text-sm text-gray-600">{notif.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

