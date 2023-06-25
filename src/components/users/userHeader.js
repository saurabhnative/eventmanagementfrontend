import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  // Handle logout functionality
  const handleLogout = async () => {
    // Implement logout logic here
    // ...
    localStorage.clear();
    router.push('/');
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-purple-900 text-white">
      <div className="flex items-center space-x-4 w-full justify-center text-center">
        <a className="text-xl font-bold">User Registration</a>
      </div>

      <div className="flex items-center space-x-4">
        <div
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </div>
      </div>
    </header>
  );
};

export default Header;
