import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-purple-900 text-white h-screen w-64 flex flex-col justify-between">
      {/* Sidebar content */}
      <nav className="p-12">
        {/* Sidebar links */}
        <ul className="p-4">
          <li className="mb-8" onClick={() => router.push('/events')}>
            <a href="#" className="text-white hover:text-gray-200">
              View All Events
            </a>
          </li>
          <li className="mb-8" onClick={() => router.push('/events/create')}>
            <a href="#" className="text-white hover:text-gray-200">
              Create Event
            </a>
          </li>
          <li className="mb-8">
            <a href="#" className="text-white hover:text-gray-200">
              Update Event
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
