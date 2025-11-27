'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { 
  FiDroplet, 
  FiClock, 
  FiTrendingUp, 
  FiAlertCircle,
  FiPlay,
  FiPause,
  FiSettings,
  FiActivity
} from 'react-icons/fi'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Sample data for charts
const waterUsageData = [
  { day: 'Mon', usage: 45, optimal: 40 },
  { day: 'Tue', usage: 52, optimal: 40 },
  { day: 'Wed', usage: 38, optimal: 40 },
  { day: 'Thu', usage: 41, optimal: 40 },
  { day: 'Fri', usage: 47, optimal: 40 },
  { day: 'Sat', usage: 39, optimal: 40 },
  { day: 'Sun', usage: 43, optimal: 40 },
]

const soilMoistureData = [
  { time: '00:00', zone1: 65, zone2: 58, zone3: 72 },
  { time: '04:00', zone1: 62, zone2: 55, zone3: 68 },
  { time: '08:00', zone1: 58, zone2: 52, zone3: 64 },
  { time: '12:00', zone1: 54, zone2: 48, zone3: 60 },
  { time: '16:00', zone1: 68, zone2: 62, zone3: 75 },
  { time: '20:00', zone1: 70, zone2: 65, zone3: 78 },
]

const IrrigationPage = () => {
  const [zones, setZones] = useState([
    { id: 1, name: 'Zone 1 - North Field', status: 'active', moisture: 65, flowRate: 12.5, lastWatered: '2 hours ago' },
    { id: 2, name: 'Zone 2 - South Field', status: 'idle', moisture: 58, flowRate: 0, lastWatered: '5 hours ago' },
    { id: 3, name: 'Zone 3 - East Field', status: 'active', moisture: 72, flowRate: 15.2, lastWatered: '1 hour ago' },
    { id: 4, name: 'Zone 4 - West Field', status: 'scheduled', moisture: 45, flowRate: 0, lastWatered: '8 hours ago' },
  ])

  const toggleZoneStatus = (zoneId: number) => {
    setZones(zones.map(zone => {
      if (zone.id === zoneId) {
        const newStatus = zone.status === 'active' ? 'idle' : 'active'
        return { ...zone, status: newStatus }
      }
      return zone
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'idle': return 'text-gray-600 bg-gray-100'
      case 'scheduled': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getMoistureColor = (moisture: number) => {
    if (moisture >= 70) return 'text-green-600'
    if (moisture >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 font-display">
              💧 Smart Irrigation System
            </h1>
            <p className="mt-2 text-gray-600">
              Monitor and control your irrigation zones in real-time
            </p>
          </div>
          <button className="mt-4 md:mt-0 btn-primary flex items-center space-x-2">
            <FiSettings className="text-lg" />
            <span>System Settings</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Water Usage</p>
                <p className="text-2xl font-bold text-gray-900">1,245 L</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <FiTrendingUp className="mr-1" />
                  15% savings this week
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FiDroplet className="text-3xl text-blue-600" />
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Zones</p>
                <p className="text-2xl font-bold text-gray-900">2 / 4</p>
                <p className="text-xs text-gray-500 mt-1">Currently irrigating</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FiActivity className="text-3xl text-green-600" />
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg. Soil Moisture</p>
                <p className="text-2xl font-bold text-gray-900">60%</p>
                <p className="text-xs text-green-600 mt-1">Optimal range</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <FiTrendingUp className="text-3xl text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="card hover-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Next Scheduled</p>
                <p className="text-2xl font-bold text-gray-900">2:30 PM</p>
                <p className="text-xs text-gray-500 mt-1">Zone 4 - West Field</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FiClock className="text-3xl text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Irrigation Zones */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 font-display">
              Irrigation Zones
            </h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              View All Zones →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {zones.map((zone) => (
              <div 
                key={zone.id}
                className="border-2 border-gray-200 rounded-xl p-4 hover:border-primary-300 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{zone.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(zone.status)}`}>
                      {zone.status.charAt(0).toUpperCase() + zone.status.slice(1)}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleZoneStatus(zone.id)}
                    className={`p-3 rounded-lg transition-colors ${
                      zone.status === 'active' 
                        ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                        : 'bg-green-100 text-green-600 hover:bg-green-200'
                    }`}
                  >
                    {zone.status === 'active' ? <FiPause className="text-xl" /> : <FiPlay className="text-xl" />}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Soil Moisture</p>
                    <p className={`text-lg font-bold ${getMoistureColor(zone.moisture)}`}>
                      {zone.moisture}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Flow Rate</p>
                    <p className="text-lg font-bold text-gray-900">
                      {zone.flowRate} L/min
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Last Watered</p>
                    <p className="text-sm text-gray-700">
                      {zone.lastWatered}
                    </p>
                  </div>
                </div>

                {/* Mini progress bar */}
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        zone.moisture >= 70 ? 'bg-green-500' : 
                        zone.moisture >= 50 ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`}
                      style={{ width: `${zone.moisture}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Water Usage Chart */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-display">
              Weekly Water Usage
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={waterUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="usage" fill="#10b981" name="Actual Usage (L)" />
                <Bar dataKey="optimal" fill="#6366f1" name="Optimal (L)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Soil Moisture Trends */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-display">
              Soil Moisture Trends (24h)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={soilMoistureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="zone1" stroke="#10b981" strokeWidth={2} name="Zone 1" />
                <Line type="monotone" dataKey="zone2" stroke="#3b82f6" strokeWidth={2} name="Zone 2" />
                <Line type="monotone" dataKey="zone3" stroke="#8b5cf6" strokeWidth={2} name="Zone 3" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts */}
        <div className="card bg-yellow-50 border-2 border-yellow-200">
          <div className="flex items-start space-x-3">
            <FiAlertCircle className="text-2xl text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-900 mb-1">System Alert</h3>
              <p className="text-yellow-800 text-sm">
                Zone 4 (West Field) has low soil moisture (45%). Irrigation scheduled for 2:30 PM today.
              </p>
              <button className="mt-3 text-sm font-medium text-yellow-900 hover:text-yellow-950 underline">
                Start Irrigation Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default IrrigationPage

