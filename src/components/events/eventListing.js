import React, { useEffect, useState } from 'react';
import EventCard from './eventCard';
import api from '../../utils/apiClient';

const EventListing = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/events');
        setEvents(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto py-4 px-12">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      {isLoading ? <p>Loading Events</p> : null}
      {events.length === 0 && !isLoading ? (
        <p>No events found.</p>
      ) : (
        <div className="space-y-4 eventsHeight overflow-y-scroll">
          {events.map((event) => (
            <EventCard event={event} key={event._id} source={props.source} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventListing;
