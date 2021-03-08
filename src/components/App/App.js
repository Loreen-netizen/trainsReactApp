import './App.css';
import Header from "../Header/Header"
import Stations from "../Stations/Stations"
import SingleStation from "../SingleStation/SingleStation"

import React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
    <Header />
    <HashRouter>
      <Switch>
  
        <Route path="/station/:id" children={<SingleStation/>}/>
          

        <Route path="/" children={<Stations/>} />
        

      </Switch>
    </HashRouter>
    </div>
  )
}

// const getData = async () => {
//   const stationsResponse = await fetch('/data/stations.json');
//   const trainsRespnse = await fetch('/data/trains.json');

//   const stationsData = await stationsResponse.json();
//   const trainsData = await trainsRespnse.json();
//   console.log(stationsData);
//   console.log(trainsData);

// }

// return (
//   <div>

//     <Header />
//     <Stations />
//     <button onClick = {getData}>logData</button>

//   </div>
// );
// }

export default App;
