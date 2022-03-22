import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { unstable_HistoryRouter } from "react-router-dom";
import './FormEventCreate.scss';

const FormEventCreate = () => {

  const dispatch = useDispatch()

  const [formInputs, setFormInputs] = useState({
    sport: '',
    club: '',
    city: '',
    date: "",
    heure: "",
    nbPlaces: 0

  })
  let history = unstable_HistoryRouter;
  useEffect(() => {
    console.log(formInputs);
  }, [formInputs])

  const addEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      id: 5,
      name_person: "Jean",
      stars_person: 1,
      sport_event: formInputs.sport,
      club_event: formInputs.club,
      date_event: formInputs.date,
      time_event: formInputs.heure,
      nb_place_available: formInputs.nbPlaces,
      city: formInputs.city,
    }

    dispatch({
      type: 'CREATEEVENT',
      payload: newEvent
    })
  }


  return (
    <form onSubmit={(e) => addEvent(e)} className="form-event-create">
      <label>
        Sport :
        <select value={formInputs.sport} onChange={(e) => setFormInputs({
          ...formInputs,
          sport: e.target.value
        })}>
          <option value="">...</option>
          <option value="Padel">Padel</option>
        </select>
      </label>
      <label>
        Club :
        <select value={formInputs.club} onChange={(e) => setFormInputs({
          ...formInputs,
          club: e.target.value
        })}>
          <option value="">...</option>
          <option value="Stade Toulousain">Stade Toulousain</option>
          <option value="Balma Tennis">Tennis Club Balma</option>
        </select>
      </label>
      <label>
        Ville :
        <select value={formInputs.city} onChange={(e) => setFormInputs({
          ...formInputs,
          city: e.target.value
        })}>
          <option value="">...</option>
          <option value="Toulouse">Toulouse</option>
          <option value="paris">Paris</option>
        </select>
      </label>
      <label>
        Date :
        <input value={formInputs.date} onChange={(e) => setFormInputs({
          ...formInputs,
          date: e.target.value
        })} type="date" />
      </label>
      <label>
        heure :
        <input value={formInputs.heure} onChange={(e) => setFormInputs({
          ...formInputs,
          heure: e.target.value
        })} type="time" />
      </label>
      <label>
        Nb de place dispo :
        <select value={formInputs.nbPlaces} onChange={(e) => setFormInputs({
          ...formInputs,
          nbPlaces: e.target.value
        })}>
          <option value="0">...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <button >Créer l'évenement</button>
    </form>
  );
};

export default FormEventCreate;
