'use client'

import { useState, useEffect } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { FiUser, FiMail, FiPhone, FiSave, FiBell, FiLock, FiSettings, FiShield, FiHelpCircle, FiArrowRight } from 'react-icons/fi'

type SettingsTab = 'profile' | 'notification' | 'preferences' | 'privacy' | 'support'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile')
  const [user, setUser] = useState<any>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Haya MASIMBILE',
    email: 'hope@giggrok.com',
    phone: '+250 745698909',
    bio: 'Dedicated farmer nurturing the land with care to grow healthy, sustainable crops.',
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('soilsmart_user')
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setUser(userData)
      setFormData({
        name: userData.name || 'Haya MASIMBILE',
        email: userData.email || 'hope@giggrok.com',
        phone: userData.phone || '+250 745698909',
        bio: userData.bio || 'Dedicated farmer nurturing the land with care to grow healthy, sustainable crops.',
      })
    }
  }, [])

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      const updatedUser = { ...user, ...formData }
      localStorage.setItem('soilsmart_user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      setIsSaving(false)
      alert('Settings saved successfully!')
    }, 1000)
  }

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    if (passwordData.newPassword.length < 6) {
      alert('Password must be at least 6 characters!')
      return
    }
    alert('Password changed successfully!')
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    setShowChangePassword(false)
  }

  const bioWordCount = formData.bio.split(/\s+/).filter(word => word.length > 0).length

  const settingsTabs = [
    { id: 'profile' as SettingsTab, label: 'Profile', icon: FiUser },
    { id: 'notification' as SettingsTab, label: 'Notification', icon: FiBell },
    { id: 'preferences' as SettingsTab, label: 'App Preferences', icon: FiSettings },
    { id: 'privacy' as SettingsTab, label: 'Privacy & Security', icon: FiShield },
    { id: 'support' as SettingsTab, label: 'Support & Feedback', icon: FiHelpCircle },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 px-3 sm:px-0">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display mb-1 sm:mb-2">Settings</h1>
          <p className="text-sm sm:text-base text-gray-600">Customize your experience - your app your way.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-700 mb-3 sm:mb-4 px-2">Settings</h3>
              <div className="space-y-1">
                {settingsTabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id)
                        setShowChangePassword(false)
                      }}
                      className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                        activeTab === tab.id
                          ? 'bg-[#16a34a] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="text-lg sm:text-xl" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!showChangePassword ? (
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Profile Information</h2>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl">
                      {formData.name.charAt(0)}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio / Description</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => {
                      const newBio = e.target.value
                      const wordCount = newBio.split(/\s+/).filter(word => word.length > 0).length
                      if (wordCount <= 100) {
                        setFormData({ ...formData, bio: newBio })
                      }
                    }}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">{bioWordCount}/100 words</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex-1 sm:flex-none px-6 py-3 bg-[#15803d] hover:bg-[#166534] text-white font-semibold rounded-lg transition-all disabled:opacity-50 text-sm sm:text-base"
                  >
                    {isSaving ? 'Saving...' : 'Save changes'}
                  </button>
                  <button
                    onClick={() => setShowChangePassword(true)}
                    className="flex items-center justify-between sm:justify-center gap-2 px-4 sm:px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-sm sm:text-base"
                  >
                    <FiLock className="text-lg sm:text-xl" />
                    <span>Change password</span>
                    <FiArrowRight className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Change Password</h2>
                  <button
                    onClick={() => setShowChangePassword(false)}
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
                  >
                    ← Back to Profile
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all text-sm sm:text-base"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <button
                    onClick={handleChangePassword}
                    className="w-full px-6 py-3 bg-[#15803d] hover:bg-[#166534] text-white font-semibold rounded-lg transition-all text-sm sm:text-base"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            )}

            {/* Other Settings Tabs Placeholder */}
            {activeTab !== 'profile' && (
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {settingsTabs.find(t => t.id === activeTab)?.label}
                </h2>
                <p className="text-gray-600">This section is coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
