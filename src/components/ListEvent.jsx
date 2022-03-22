import React, { useEffect, useState } from "react";
import FormList from "./FormList";
import padelImg from "../assets/padel_raquette.png";
import tennisImg from "../assets/tennis_raquette.jpg";
import stadeImg from "../assets/stadeToulousain.png";
import balmaImg from "../assets/padel_balma.png";
import "./ListEvent.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListEvent = () => {
  const eventState = useSelector((state) => state.eventReducer);

  const [nbPlaceTaken, setNbPlaceTaken] = useState(0);
  const [listToDisplay, setListToDisplay] = useState(eventState.listEvents);
  const [messageNoEvents, setMessageNoEvents] = useState(false);

  

  const dispatch = useDispatch();

  useEffect(() => {
    setListToDisplay(eventState.listEvents.filter((ev) => ev.date_event === eventState.dateValue))
  }, [eventState.dateValue])

  useEffect(() => {
    setListToDisplay(eventState.listEvents);
    
  }, [eventState.listEvents]);

  useEffect(() => {
    if (eventState.sportInputValue !== "") {
      
      setListToDisplay(eventState.listEvents.filter(
        (eve) => eve.sport_event === eventState.sportInputValue));
    } else {
      setListToDisplay(eventState.listEvents);
    }
  }, [eventState.sportInputValue]);

  useEffect(() => {
    if (listToDisplay.length === 0) {
      setMessageNoEvents(true);
    } else {
      setMessageNoEvents(false);
    }
  }, [listToDisplay]);



  const updateEvents = (id) => {
    const indexEvent = eventState.listEvents.findIndex((ev) => ev.id === id);

    const eventUpdate = {
      ...eventState.listEvents[indexEvent],
      nb_place_available:
        eventState.listEvents[indexEvent].nb_place_available - nbPlaceTaken,
    };

    if (nbPlaceTaken !== "") {
      dispatch({
        type: "UPDATEEVENTS",
        payload: eventUpdate,
      });
    }
  };


  const nbStars = (nb) => {
    let arrStars = [];
    for (let s = 0; s < nb; s++) {
      arrStars.push(<li key={s}>⭐</li>);
    }
    return arrStars;
  };

  const cityFunc = (city) => {
    let cityArr = [];
    for (let i = 0; i < city.length; i++) {
      cityArr.push(<li key={i}>{city[i]}</li>);
    }
    return cityArr;
  };

  const placeAvailable = (nb) => {
    let arrPlace = [];
    for (let i = 0; i < nb; i++) {
      arrPlace.push(
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      );
    }
    return arrPlace;
  };



  const handleChangePlace = (id, nbPlace) => {
    

  }

  const imgClub = (club) => {
    let url = "";
    
    switch (club) {
      case 'Stade Toulousain':
        url = stadeImg;
        
        break;


      case 'Balma Tennis':
        url = balmaImg;
        break;

      default:
        url = "";
        break
    }

    return url
  }

  const imgSport = (sport) => {
    let url = "";
    switch (sport) {
      case "Padel":
        url = padelImg;
        break;
      
      case "Tennis" : 
        url = tennisImg;
        break;
      default:
        url = "";
        break;
    }
    return url;
  };



  return (
    <div className="list_event">
      <FormList />
      {messageNoEvents && (
        <div className="noeventsearch">
          <span>Il n'y pas d'évenement à cette date</span>
          <Link to="/create-event">Créer ton évent !</Link>
        </div>
      )}
      <ul className="events">
        {listToDisplay.map((ev) => {
          return (
            <li key={ev.id} className={ev.nb_place_available ? 'event' : 'event full'}>
              <div className="pictures">
                <img src={imgSport(ev.sport_event)} alt="" />
                <img src={imgClub(ev.club_event)} alt="" />
              </div>
              <div className="informations">
                <div className="person">
                  <div className="pic_person">
                    <p>{ev.name_person.slice(0, 1)}</p>
                  </div>
                  <p className="name_person">{ev.name_person}</p>
                  <ul className="stars_person">{nbStars(ev.stars_person)}</ul>
                </div>
                <div className="evenement">
                  <p className="sport_event">Sport : {ev.sport_event}</p>
                  <p className="club_event">Club : {ev.club_event}</p>
                  <p className="time_event">
                    Créneau : le {ev.date_event} à {ev.time_event}
                  </p>
                  <p className="place_event">
                    Place(s) : {ev.nb_place_available}
                  </p>
                  <ul>{cityFunc(ev.city)}</ul>
                </div>
                <div className="modal">
                  <select
                    onChange={(e) => setNbPlaceTaken(e.target.value)}
                    htmlFor="place"
                  >
                    <option value="">Nombre de places souhaitées</option>
                    {placeAvailable(ev.nb_place_available)}
                  </select>
                </div>
                {ev.nb_place_available !== 0 ?<div className="button">
                  <button
                    onClick={() => updateEvents(ev.id)}
                    className={nbPlaceTaken === 0 ? "button_not" : ""}
                  >
                    Participer
                  </button>
                </div> : <p className="complet">Complet</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListEvent;
