import React, { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/apiClient';
import { toast } from 'react-toastify';

const EventCard = ({ event, source }) => {
  const {
    title,
    description,
    date,
    location,
    ticketPrice,
    ticketQuantity,
    imageURL,
    attendees,
  } = event;
  const userEmail = localStorage.getItem('psg_last_login');
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const router = useRouter();
  const handleEventRegistration = async () => {
    try {
      const attendees = event.attendees;
      if (!attendees.includes(userEmail)) {
        attendees.push(userEmail);
      }
      attendees.push('saurabhnative@gmail.com');
      const updatedData = { attendees };
      const response = await api.put(`/events/${event._id}`, {
        updatedData,
      });
      const data = response.data;
      setAlreadyRegistered(true);
      // Redirect or display a success message
      toast.success('Event registration successful!');
    } catch (error) {
      toast.error('Event registration failed. Please try again.');
    }
  };
  function renderUserRegistration() {
    if (event.attendees.includes(userEmail) || alreadyRegistered) {
      return (
        <div className="mt-4 py-2 w-50">
          <p className="text-gray-600">Already registered</p>
        </div>
      );
    } else {
      return (
        <button
          className="bg-purple-500 text-white py-2 px-4 mt-4 rounded"
          onClick={() => handleEventRegistration()}
        >
          Register for Event
        </button>
      );
    }
  }
  return (
    <div className="bg-white shadow-md border-b border border-gray-200 rounded-lg p-4 flex">
      <div className="flex items-center">
        <img
          className="w-80 h-76 object-cover rounded"
          src={imageURL}
          alt={title}
        />
      </div>
      <div className="ml-6 w-50">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 max-w-xl">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">
            Date: {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-gray-600">Location: {location}</p>
        </div>
        <div className="flex justify-between items-center mt-4 w-50">
          <p className="text-gray-600">Ticket Price: ${ticketPrice}</p>
          <p className="text-gray-600">Available Tickets: {ticketQuantity}</p>
        </div>
        <div className="flex justify-between items-center mt-4 w-50">
          <p className="text-gray-600">Event attendees: {attendees.length}</p>
        </div>
        {source === 'users' ? (
          renderUserRegistration()
        ) : (
          <button
            className="bg-purple-500 text-white py-2 px-4 mt-4 rounded"
            onClick={() => router.push(`/events/${event._id}`)}
          >
            Update Event
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
