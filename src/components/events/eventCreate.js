import React, { useState } from 'react';
import api from '../../utils/apiClient';
import { toast } from 'react-toastify';
const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState('');
  const [imageURL, setImageURL] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform form submission or data processing here
      const response = await api.post('/events', {
        title,
        description,
        date,
        location,
        ticketPrice,
        ticketQuantity,
        imageURL,
      });
      toast.success('Event created successfully');
    } catch (error) {
      // Handle the error appropriately
      toast.error('Error creating event. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-4 px-12">
      <h2 className="text-2xl font-semibold mb-4 w-full text-center">
        Create Event
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
            placeholder="Enter Event Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
            placeholder="Enter Event Description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
            placeholder="Enter Event Location"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageURL" className="block font-medium mb-1">
            Image Link
          </label>
          <input
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
            placeholder="Enter Event Image URL"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ticketPrice" className="block font-medium mb-1">
            Ticket Price
          </label>
          <input
            type="number"
            id="ticketPrice"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
            placeholder="Enter Ticket Price"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ticketQuantity" className="block font-medium mb-1">
            Ticket Quantity
          </label>
          <input
            type="number"
            id="ticketQuantity"
            value={ticketQuantity}
            onChange={(e) => setTicketQuantity(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
            placeholder="Enter Ticket Quantity"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
