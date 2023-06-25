// pages/events/index.js
import { useEffect } from 'react';
import EventListing from '../../components/events/eventListing';
import Layout from '../../components/events/layout';
import '../events/events.css';

const UsersPage = () => {
  // Your page content goes here
  return (
    <Layout>
      <EventListing source={'users'} />
    </Layout>
  );
};

export default UsersPage;
