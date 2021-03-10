import "./SingleStation.css";
import { useEffect, useState } from "react";
//import {useParams} from "react-router-dom";

import { HashRouter, Switch, Route, useParams } from "react-router-dom";
import TrainTimes from "../TrainTimes/TrainTimes";

const SingleStation = () => {
  const { stationId } = useParams();
  const [trains, setTrains] = useState(null);
  const [stations, setStations] = useState(null);

  console.log({ stationId });
  const getData = async () => {
    const trainsResponse = await fetch("/data/trains.json");
    const trainsData = await trainsResponse.json();
    console.log(trainsData);
    setTrains(trainsData);

    const stationsResponse = await fetch("/data/stations.json");
    const stationsData = await stationsResponse.json();
    console.log(stationsData);
    setStations(stationsData);
  };

  useEffect(() => getData(), []);

  if (!trains || !stations) {
    return (
      <div>
        <h3>Loading station.....</h3>
        <h3> Loading trains.....</h3>
      </div>
    );
  }

  return (
    <div>
        <a href="#/" className="homepagelink"> Back to Homepage</a>
      <h2 className="stationName">station:{stations[stationId]}</h2>
      <div className="trains-grid">
        {Object.keys(trains).map((trainId) => (
          <TrainTimes trainId={trainId} />
        ))}
      </div>
    </div>
  );
};

export default SingleStation;
