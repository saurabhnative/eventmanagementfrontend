// pages/events/index.js
import EventListing from '../../components/events/eventListing';
import Layout from '../../components/events/layout';

const EventsPage = () => {
  // Your page content goes here
  return (
    <Layout>
      <EventListing />
    </Layout>
  );
};

export default EventsPage;
