import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Login
          </button>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
          Event Management Platform
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img
              src="/assets/event-management.gif"
              alt="Event Management"
              className="mx-auto"
            />
          </div>
          <div className="md:col-span-1 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">
              Organize and Manage Events with Ease
            </h2>
            <p className="text-lg mb-6">
              Our Event Management Platform offers a comprehensive solution for
              planning, organizing, and managing events of all sizes. From
              conferences and trade shows to social gatherings and webinars, our
              platform has got you covered.
            </p>
            <p className="text-lg mb-6">
              Seamlessly create and manage event schedules, registrations,
              attendee management, ticketing, and much more. With our intuitive
              and user-friendly interface, you can focus on delivering memorable
              experiences while we take care of the logistics.
            </p>
            <p className="text-lg">
              Join thousands of event managers worldwide who trust our platform
              for their event management needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
