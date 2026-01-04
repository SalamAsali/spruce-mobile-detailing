'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MessageCircle, X, Calendar, Car, UserPlus, Phone, Mail } from 'lucide-react'

export default function FloatingWidgets() {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)

  const options = [
    { id: 'booking', icon: Calendar, label: 'Book a Service', route: '/booking', color: 'bg-blue-500' },
    { id: 'fleet', icon: Car, label: 'Fleet Services', route: '/fleet', color: 'bg-green-500' },
    { id: 'login', icon: UserPlus, label: 'Login/Register', route: '/login', color: 'bg-purple-500' },
    { id: 'call', icon: Phone, label: 'Call Us', action: () => window.location.href = 'tel:+1234567890', color: 'bg-orange-500' },
    { id: 'email', icon: Mail, label: 'Email Us', action: () => window.location.href = 'mailto:info@spruce.com', color: 'bg-red-500' },
      ]

  const handleOptionClick = (option) => {
        if (option.action) {
                option.action()
        } else if (option.route) {
                router.push(option.route)
        }
        setShowModal(false)
  }

  return (
        <>
          <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Open help menu"
        >
                    <MessageCircle size={24} />
            </button>

  {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
                <button
                 onClick={() => setShowModal(false)}
                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                 aria-label="Close modal"
               >
                                 <X size={24} />
                   </button>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">How can we help?</h2>
               <p className="text-gray-600 mb-6">Choose an option to get started</p>

              <div className="space-y-3">
                 {options.map((option) => {
                                   const IconComponent = option.icon
                                   return (
                                                       <button
                                       key={option.id}
                                                  onClick={() => handleOptionClick(option)}
                       className={`w-full flex items-center gap-3 p-4 rounded-lg ${option.color} text-white hover:opacity-90 transition-opacity`}
                    >
                    <IconComponent size={20} />
                                          <span className="font-medium">{option.label}</span>
                      </button>
                  )
})}
</div>
  </div>
  </div>
      )}
</>
  )
}
