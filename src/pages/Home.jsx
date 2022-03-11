import React, { useState } from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import ListEvent from '../components/ListEvent';




const Home = () => {

  


  return (
    <div className='home_page'>
      <Navbar />
      <Menu />
      <h1>Liste des évenements</h1>
      <ListEvent/>

    </div>
  );
};

export default Home;