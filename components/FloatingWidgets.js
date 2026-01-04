'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FloatingWidgets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const options = [
    { label: 'Book a Detail', route: '/book-detail' },
    { label: 'Schedule Service', route: '/schedule-service' },
    { label: 'Fleet Services', route: '/fleet-services' },
    { label: 'Emergency Detail', route: '/emergency-detail' },
    { label: 'Login', route: '/login' },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleModal}
        className="bg-teal-500 text-black p-3 rounded-full shadow-lg hover:bg-teal-600 transition"
      >
        Open Menu
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h2 className="text-lg font-semibold text-black mb-4">Menu</h2>
            <ul className="space-y-4">
              {options.map((option) => (
                <li key={option.label}>
                  <button
                    onClick={() => {
                      router.push(option.route);
                      toggleModal();
                    }}
                    className="block w-full text-left bg-teal-500 text-black py-2 px-4 rounded-lg hover:bg-teal-600 transition"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleModal}
              className="mt-4 w-full bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingWidgets;