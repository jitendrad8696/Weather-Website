import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getWeather } from "../../../../services/weather";
import { useDispatch } from "react-redux";
import { setData } from "../../../../services/WeatherSlice";

function InputBox() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const onDone = async () => {
    if (city === "") {
      alert("Please Enter city");
    } else {
      const data = await getWeather({ city });
      dispatch(setData({ data }));
    }
  };

  return (
    <>
      <input
        className="rounded-sm text-black px-1 py-1 w-44"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <NavLink
        to="weather"
        onClick={onDone}
        className="bg-white text-black rounded-sm py-1 px-3 mx-2"
      >
        Go
      </NavLink>
    </>
  );
}

export default InputBox;
