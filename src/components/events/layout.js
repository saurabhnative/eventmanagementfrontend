import React from 'react';
import Sidebar from './sidebar';
import Header from './eventHeader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Layout;
