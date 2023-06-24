import React, { useState } from 'react';
import Layout from '../../components/events/layout';
import EventCreationForm from '../../components/events/eventCreate';
const EventCreation = () => {
  return (
    <Layout>
      <EventCreationForm />
    </Layout>
  );
};

export default EventCreation;
