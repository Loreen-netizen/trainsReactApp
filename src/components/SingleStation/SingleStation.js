import "./SingleStation.css";
import { useEffect, useState } from "react";
//import {useParams} from "react-router-dom";

import {
      HashRouter,
      Switch,
      Route,
  useParams,
} from "react-router-dom";
import TrainTimes from "../TrainTimes/TrainTimes";

const SingleStation = () => {
  const [trains, setTrains] = useState(null);
  
  const { stationId } =  useParams();
  (console.log({stationId}));
  const getData = async () => {
    const response = await fetch("/data/trains.json");
    const data = await response.json();
    console.log(data);

    setTrains(data);
  };

  useEffect(() => getData(), []);

  if (!trains) {
    return (
      <div>
        <h2>station:{stationId}</h2>
        <h3> Loading trains.....</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>station:{stationId}</h2>
      {Object.keys(trains)
      .map((trainId) => <TrainTimes trainId={trainId}/>)
      }
    </div>
  );
};

export default SingleStation;
