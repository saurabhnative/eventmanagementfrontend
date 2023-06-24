import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6" key={event._id}>
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-500">{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>Ticket Price: ${event.ticketPrice}</p>
      <p>Ticket Quantity: {event.ticketQuantity}</p>
      <button className="bg-purple-500 text-white py-2 px-4 mt-4 rounded">
        Register for Event
      </button>
    </div>
  );
};

export default EventCard;
