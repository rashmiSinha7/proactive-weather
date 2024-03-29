import React from "react";
import "./search.css";

function Search(props) {

  const { searchHandle, inputLocationHandle, inputLocation } = props;

  return (
    <div className="search">
      <h3>Weather App</h3>
      <form onSubmit={(e) => {
          e.preventDefault()
          searchHandle && searchHandle();
        }}>
      <input
        type="text"
        id="searchbox"
        placeholder="Weather Forecast Location"
        value={inputLocation}
        onChange={(e) => {
          inputLocationHandle && inputLocationHandle(e.target.value);
        }}
      ></input>
      <button
      type="submit"
      >
        Submit
      </button>
      </form>
    </div>
  );
}

export default Search;
