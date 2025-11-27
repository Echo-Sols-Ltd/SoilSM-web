'use client'

import { motion } from 'framer-motion'
import { FiActivity, FiMapPin, FiBattery, FiClock } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import DashboardLayout from '@/components/DashboardLayout'
import { sampleSensors, soilMoistureData, phData } from '@/lib/sampleData'

export default function MonitoringPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-2">Soil Monitoring</h2>
          <p className="text-blue-100 text-lg">Real-time sensor data and analytics</p>
        </motion.div>

        {/* Sensors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleSensors.map((sensor, index) => (
            <motion.div
              key={sensor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    sensor.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  <FiActivity className="text-xl" />
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    sensor.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                  } animate-pulse`}
                />
              </div>

              <h3 className="font-bold text-gray-900 mb-1">{sensor.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{sensor.type}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Current Value:</span>
                  <span className="font-bold text-gray-900">
                    {sensor.value}
                    {sensor.unit}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-1">
                    <FiBattery className="text-xs" />
                    Battery:
                  </span>
                  <span className={`font-medium ${sensor.battery < 20 ? 'text-red-600' : 'text-gray-900'}`}>
                    {sensor.battery}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 flex items-center gap-1">
                    <FiClock className="text-xs" />
                    Last Reading:
                  </span>
                  <span className="text-gray-900 text-xs">{sensor.lastReading}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <FiMapPin className="text-xs mr-1" />
                  <span className="text-xs">
                    {sensor.location.lat.toFixed(4)}, {sensor.location.lng.toFixed(4)}
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Moisture Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Moisture Trend (7 Days)</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Field A - North</option>
                <option>Field A - South</option>
                <option>Field B - Center</option>
                <option>Field B - East</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={soilMoistureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} name="Moisture" dot={{ fill: '#16a34a', r: 4 }} />
                <Line type="monotone" dataKey="optimal" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="Optimal" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* pH Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">pH Levels (7 Days)</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                <option>Field A - North</option>
                <option>Field A - South</option>
                <option>Field B - Center</option>
                <option>Field B - East</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={phData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis domain={[5, 8]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} name="pH Level" dot={{ fill: '#8b5cf6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Sensor Health Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sensor Health Status</h3>
          <div className="space-y-3">
            {sampleSensors.map((sensor) => (
              <div key={sensor.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{sensor.id}</span>
                    <span className={`text-sm font-medium ${sensor.status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {sensor.status === 'active' ? 'Active' : 'Warning'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${sensor.battery < 20 ? 'bg-red-500' : sensor.battery < 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      style={{ width: `${sensor.battery}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Battery: {sensor.battery}%</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}

