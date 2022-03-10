import React from "react";
import "./FormList.scss";

const FormList = () => {
  return (
    <form className="form_list">
      <label htmlFor="input_date">Recherche par date:</label>
      <div className="input_style">
        <input type="date" placeholder="Recherche par date" htmlFor="input_date" />
        <button>🔎</button>
      </div>
    </form>
  );
};

export default FormList;
