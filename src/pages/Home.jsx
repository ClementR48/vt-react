import React from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import ListEvent from '../components/ListEvent';




const Home = () => {



  return (
    <div className='home_page'>
      <Navbar />
      <Menu />
      <h1>home page</h1>
      <ListEvent />

    </div>
  );
};

export default Home;