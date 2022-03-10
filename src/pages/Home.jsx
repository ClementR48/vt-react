import React, { useState } from 'react';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import ListEvent from '../components/ListEvent';




const Home = () => {

  const [event, setEvent] = useState([
    {
      id:1,
      name_person: 'Clément',
      stars_person: 3,
      sport_event: 'Padel',
      club_event: 'Stade Toulousain',
      date_event: '17/03',
      time_event: '18h',
      nb_place_available: 2,
      city: 'Toulouse'
    },
    {
      id:2,
      name_person: 'Marie',
      stars_person: 2,
      sport_event: 'Padel',
      club_event: 'Balma Tennis',
      date_event: '19/03',
      time_event: '17h',
      nb_place_available: 1,
      city: 'Toulouse'
    },
    {
      id: 3,
      name_person: 'Patrick',
      stars_person: 2,
      sport_event: 'Padel',
      club_event: 'Stade Toulousain',
      date_event: '17/03',
      time_event: '18h',
      nb_place_available: 2,
      city: 'Toulouse'
    },
    {
      id:4,
      name_person: 'Clément',
      stars_person: 2,
      sport_event: 'Padel',
      club_event: 'Stade Toulousain',
      date_event: '17/03',
      time_event: '18h',
      nb_place_available: 2,
      city: 'Paris'
    },
  ])


  return (
    <div className='home_page'>
      <Navbar />
      <Menu />
      <h1>Liste des évenements</h1>
      <ListEvent event={event} />

    </div>
  );
};

export default Home;