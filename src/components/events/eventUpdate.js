import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from '../../utils/apiClient';
import { toast } from 'react-toastify';

const EventUpdatePage = () => {
  const router = useRouter();
  const { eventId } = router.query; // Access the event ID from the query parameters
  const [eventData, setEventData] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    ticketPrice: 0,
    ticketQuantity: 0,
  });

  useEffect(() => {
    if (eventId) {
      // Fetch the event data based on the event ID
      const fetchEvent = async () => {
        try {
          const response = await api.get(`/events/${eventId}`); // Replace with your API endpoint
          const data = response.data;
          setEventData(data);
          setUpdatedData(data); // Set the initial form values to the fetched data
        } catch (error) {
          console.error('Error fetching event:', error);
        }
      };

      fetchEvent();
    }
  }, [eventId]);

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/events/${eventId}`, {
        updatedData,
      });
      const data = response.data;
      // Redirect or display a success message
      toast.success('Event updated successfully');
    } catch (error) {
      toast.error('Error updating event. Please try again.');
    }
  };

  if (!eventData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-4 px-12">
      <h2 className="text-2xl font-semibold mb-4 w-full text-center">
        Event Details Page
      </h2>

      <form onSubmit={handleUpdateEvent} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={updatedData.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={updatedData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium mb-1">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={new Date(updatedData.date).toISOString().substring(0, 10)}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium mb-1">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={updatedData.location}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ticketPrice" className="block font-medium mb-1">
            Ticket Price:
          </label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            value={updatedData.ticketPrice}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ticketQuantity" className="block font-medium mb-1">
            Ticket Quantity:
          </label>
          <input
            type="number"
            id="ticketQuantity"
            name="ticketQuantity"
            value={updatedData.ticketQuantity}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500 shadow"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EventUpdatePage;
