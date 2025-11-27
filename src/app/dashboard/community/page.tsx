'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import { FiHeart, FiMessageCircle, FiShare2, FiImage, FiVideo, FiMoreVertical } from 'react-icons/fi'
import Image from 'next/image'

interface Post {
  id: number
  author: string
  time: string
  content: string
  image?: string
  likes: number
  comments: number
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'region' | 'questions' | 'news'>('all')
  const [postContent, setPostContent] = useState('')

  const posts: Post[] = [
    {
      id: 1,
      author: 'Farmer Kallis',
      time: '2 hours ago',
      content: 'Just completed soil injection to improve moisture levels. The results are promising! 🌱',
      image: '/images/95d225cd0eaeb990224ee01db5bb59e2.jpg',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: 'Farmer Albert',
      time: '4 hours ago',
      content: 'Anyone have experience with soil nutrients for maize? Looking for recommendations.',
      likes: 12,
      comments: 5,
    },
    {
      id: 3,
      author: 'Farmer Kallis',
      time: '6 hours ago',
      content: 'My soil dropped significantly. Any suggestions on how to improve it?',
      likes: 18,
      comments: 12,
    },
    {
      id: 4,
      author: 'Farmer Kallis',
      time: '8 hours ago',
      content: 'Need help with irrigation scheduling. Can someone assist?',
      likes: 15,
      comments: 7,
    },
  ]

  const announcements = [
    { id: 1, title: 'New AI Soil Analysis update released', link: 'Read more' },
    { id: 2, title: 'Rainy Week Ahead', link: 'Read more' },
    { id: 3, title: 'Join the 30-Day Soil Challenge', link: 'Read more' },
  ]

  const activeFarmers = [
    { name: 'James Doe', status: 'online' },
    { name: 'Farmer Kallis', status: 'away' },
    { name: 'Farmer Albert', status: 'online' },
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      online: 'bg-green-500',
      away: 'bg-orange-500',
      offline: 'bg-red-500',
    }
    return colors[status as keyof typeof colors] || colors.offline
  }

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 px-3 sm:px-0">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display mb-1 sm:mb-2">Community Hub</h1>
          <p className="text-sm sm:text-base text-gray-600">Connect with farmers in your community.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Post Creation */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">
                Share an update with your community
              </h3>
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's on your mind?"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-[#16a34a] transition-all resize-none text-sm sm:text-base mb-3 sm:mb-4"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#16a34a] transition-colors text-sm sm:text-base">
                    <FiImage className="text-lg sm:text-xl" />
                    <span className="hidden sm:inline">Photo</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#16a34a] transition-colors text-sm sm:text-base">
                    <FiVideo className="text-lg sm:text-xl" />
                    <span className="hidden sm:inline">Video</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (postContent.trim()) {
                      setPostContent('')
                      // In a real app, this would create a post
                    }
                  }}
                  className="px-4 sm:px-6 py-2 bg-[#16a34a] text-white rounded-lg hover:bg-[#15803d] transition-colors text-sm sm:text-base font-medium"
                >
                  Post updates
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2">
              <div className="flex gap-2 sm:gap-4">
                {[
                  { id: 'all', label: 'All posts' },
                  { id: 'region', label: 'My region' },
                  { id: 'questions', label: 'Questions' },
                  { id: 'news', label: 'News' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#16a34a] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4 sm:space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{post.author}</h4>
                        <p className="text-xs sm:text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FiMoreVertical className="text-lg sm:text-xl" />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{post.content}</p>

                  {post.image && (
                    <div className="relative w-full h-48 sm:h-64 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.content}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors text-sm sm:text-base">
                      <FiHeart className="text-lg sm:text-xl" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors text-sm sm:text-base">
                      <FiMessageCircle className="text-lg sm:text-xl" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors text-sm sm:text-base">
                      <FiShare2 className="text-lg sm:text-xl" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Announcements</h3>
              <div className="space-y-3 sm:space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-l-4 border-[#16a34a] pl-3 sm:pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{announcement.title}</h4>
                    <a href="#" className="text-xs sm:text-sm text-[#16a34a] hover:text-[#15803d] font-medium">
                      {announcement.link} →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Farmers */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Active farmers</h3>
              <div className="space-y-3 sm:space-y-4">
                {activeFarmers.map((farmer, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm sm:text-base">
                        {farmer.name.charAt(0)}
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(farmer.status)} rounded-full border-2 border-white`}></div>
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-900">{farmer.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

