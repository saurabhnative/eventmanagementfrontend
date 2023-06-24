import React from 'react';
import Sidebar from './sidebar';
import Header from './eventHeader';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          {/* Main content */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
