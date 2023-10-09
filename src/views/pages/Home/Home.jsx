import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWeather } from "../../../services/weather";
import { useDispatch } from "react-redux";
import { setData } from "../../../services/WeatherSlice";

function Home() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((location) => {
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
      });
    } else {
      alert("Please give acces of Location to get Weather Info");
    }
  }, []);

  const onDone = async () => {
    if (lat === "" && lon === "") {
      alert("Please give acces of Location to get Weather Info");
    } else {
      const data = await getWeather({ lat, lon });
      dispatch(setData({ data }));
    }
  };

  return (
    <div className="h-screen bg-teal-600 text-white">
      <div className="flex justify-center items-center h-2/4 text-3xl text-center">
        <h1>Welcome to Weather Website</h1>
      </div>

      <div className="flex justify-center items-start h-2/4">
        <Link
          to="weather"
          className="bg-white text-black rounded-sm py-1 px-3 mx-2"
          onClick={onDone}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
