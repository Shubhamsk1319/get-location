// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import useGeoLocation from "./useGeoLocation";

function App() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(null);
  const [z, setZ] = useState(null);
  const location = useGeoLocation();
  const location2 = JSON.stringify(location.coordinates.lat);
  console.log(location2);
  const location3 = JSON.stringify(location.coordinates.lng);
  console.log(location3);
  // console.log(location2.coordinates);
  // const x = JSON.parse(location2);
  // console.log(location);
  // console.log(location, ["loaded", "coordinates"]);
  useEffect(() => {
  const fetchApi = async () => {
    // setX(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location2}&lon=${location3}&appid=aac86e38c6df410e6010639de4a0a13f`;
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
    setY(resJson.name);
    setZ(resJson.sys.country);
    // setCity(resJson.main);
    // return(
    //   <>
    //     <h1>{resJson.main}</h1>
    //   </>
    // );
    // return resJson;
  }
  fetchApi();
})
  // console.log(res);
  const func = () =>{
    setX(true);
  }
  return (
    <div className="main">
      {/* {location.loaded
        ? JSON.stringify(location.coordinates)
        : "Location data not available yet."} */}
        <button onClick={func}>get your city</button>
        {/* {x
        ? x
        : "Location data not available yet."} */}
        {/* {x ? y : "not working"} */}
        {/* <h2>{y}</h2> */}
        {x && <h2>{y}, {z}</h2>}
    </div>
  );
}

export default App;
