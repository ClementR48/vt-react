import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormList.scss";

const FormList = () => {
  const eventState = useSelector((state) => state.eventReducer);
  const dispatch = useDispatch();

  const changeInputValue = (value) => {
    dispatch({
      type: "DATEVALUE",
      payload: value,
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
        <button onClick={() => changeInputValue('')}>Enlever filtre</button>
    </form>
  );
};

export default FormList;
