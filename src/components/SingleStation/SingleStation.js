import "./SingleStation.css";
import { useEffect, useState } from "react";

// import {
//     HashRouter,
//     Switch,
//     Route,
//     useParams
// } from "react-router-dom";

const SingleStation = () => {
  const [trains, setTrains] = useState(null);

  const getData = async () => {
    const response = await fetch("/data/trains.json");
    const data = await response.json();
    console.log(data);

    setTrains(data);
  };

  useEffect(() => getData(), []);

  // const { id } = useParams()
  if (!trains) {
    return (
      <ul>
        <li className="trainsList"> Loading trains.....</li>
        <li className="trainsList"> Loading trains.....</li>
        <li className="trainsList"> Loading trains.....</li>
        <li className="trainsList"> Loading trains.....</li>
        <li className="trainsList"> Loading trains.....</li>
      </ul>
    );
  }

  return (
    <div>
      <ul>
        {Object.keys(trains).map((letter) => (
          <li className="trainsList" key={letter}>
            Train {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleStation;
