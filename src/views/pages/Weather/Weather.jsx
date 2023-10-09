import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Weather() {
  const data = useSelector((state) => state.data);
  return (
    <div className="h-screen bg-teal-600">
      <h1>Temp :{data?.main?.temp}</h1>
      <h1>Hymidity :{data?.main?.humidity}</h1>
    </div>
  );
}

export default Weather;
