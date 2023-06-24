import React from 'react';
import { useRouter } from 'next/router';

const EventCard = ({ event }) => {
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
  const router = useRouter();
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex">
      <div className="flex items-center">
        <img
          className="w-50 h-40 object-cover rounded"
          src={imageURL}
          alt={title}
        />
      </div>
      <div className="ml-6 w-50">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 max-w-xl">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">
            Date: {new Date(event.date).toLocaleDateString()}
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
        <button
          className="bg-purple-500 text-white py-2 px-4 mt-4 rounded"
          onClick={() => router.push(`/events/${event._id}`)}
        >
          Update Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;
