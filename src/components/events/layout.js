import React, { useEffect } from 'react';
import Sidebar from './sidebar';
import Header from './eventHeader';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('psg_auth_token')) {
      router.push(`/`);
    }
  });
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
