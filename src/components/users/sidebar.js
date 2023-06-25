import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-purple-800 text-white h-screen w-64 flex flex-col justify-between">
      {/* Sidebar content */}
      <nav className="p-12">
        {/* Sidebar links */}
        <ul className="p-4">
          <li className="mb-8" onClick={() => router.push('/users')}>
            <a href="#" className="text-white hover:text-gray-200">
              View All Events
            </a>
          </li>
        </ul>
        <ul className="p-4">
          <li className="mb-8" onClick={() => router.push('/users/profile')}>
            <a href="#" className="text-white hover:text-gray-200">
              View Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
