import React from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import FormEventCreate from '../components/FormEventCreate';

const CreateEvent = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <h1>Créé ton évenement et va transpirer</h1>
      <FormEventCreate />
    </div>
  );
};

export default CreateEvent;