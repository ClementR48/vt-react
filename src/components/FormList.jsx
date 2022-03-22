import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormList.scss";

const FormList = () => {
  const [textSportValue, setTextSportValue] = useState("");
  const eventState = useSelector((state) => state.eventReducer);
  const dispatch = useDispatch();

  const changeInputValue = (value) => {
    
    dispatch({
      type: "DATEVALUE",
      payload: value,
    });
  };
  const changeSportInput = () => {
    dispatch({
      type: "SPORTFILTER",
      payload: textSportValue,
    });
  };

  const changeEvents = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form_list" onSubmit={(e) => changeEvents(e)}>
      <label htmlFor="input_date">Recherche par date:</label>
      <div className="input_style">
        <input
          type="date"
          placeholder="Recherche par date"
          htmlFor="input_date"
          value={eventState.sortBydate}
          onChange={(e) => changeInputValue(e.target.value)}
        />
      </div>
      <label>
        Recherche par date:
        <input
          type="text"
          placeholder="Recherche par sport"
          value={textSportValue}
          onChange={(e) => setTextSportValue(e.target.value)}
        />
      </label>
      <button onClick={() => changeSportInput()}>Valider</button>

      <button onClick={() => changeInputValue("")}>Enlever filtre</button>
    </form>
  );
};

export default FormList;
