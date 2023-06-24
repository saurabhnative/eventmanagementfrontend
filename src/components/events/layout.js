import React from 'react';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {/* Main content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
