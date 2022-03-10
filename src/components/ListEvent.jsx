import React, { useState } from "react";
import FormList from "./FormList";
import padelImg from "../assets/padel_raquette.png";
import "./ListEvent.scss";

const ListEvent = ({ event }) => {
  const [selectValue, setSelectValue] = useState("");

  const nbStars = (nb) => {
    let arrStars = [];
    for (let s = 0; s < nb; s++) {
      arrStars.push(<li>⭐</li>);
    }
    return arrStars;
  };

  const cityFunc = (city) => {
    let cityArr = [];
    for (let i = 0; i < city.length; i++) {
      cityArr.push(<li>{city[i]}</li>);
    }
    return cityArr;
  };

  const placeAvailable = (nb) => {
    let arrPlace = [];
    for (let i = 0; i < nb; i++) {
      arrPlace.push(<option value={i + 1}>{i + 1}</option>);
    }
    return arrPlace;
  };

  const imgSport = (sport) => {
    let url = "";
    switch (sport) {
      case "Padel":
        url = padelImg;
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
      <ul className="events">
        {event.map((ev) => {
          return (
            <li className="event">
              <div className="pictures">
                <img src={imgSport(ev.sport_event)} alt="" />
                <img src="http://placekitten.com/200/200" alt="" />
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
                    onChange={(e) => setSelectValue(e.target.value)}
                    htmlFor="place"
                  >
                    <option value="">Nombre de places souhaitées</option>
                    {placeAvailable(ev.nb_place_available)}
                  </select>
                </div>
                <div className="button">
                  <button className={selectValue === "" ? "button_not" : ""}>
                    Participer
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListEvent;
