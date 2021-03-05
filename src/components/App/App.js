import './App.css';
import Header from "../Header/Header"
import Stations from "../Stations/Stations"

// const GetTrains = async () => {

//   let trainsObj2 = await getData('/data/trains.json');
//   let arr = [];
//   let obj2 = arr.push(trainsObj2) 
//   console.log({obj2})
//   await obj2.map(train => { return <li>{train}</li> });

// }
const App = () => {

  const getData = async () => {
    const stationsResponse = await fetch('/data/stations.json');
    const trainsRespnse = await fetch('/data/trains.json');

    const stationsData = await stationsResponse.json();
    const trainsData = await trainsRespnse.json();
    console.log(stationsData);
    console.log(trainsData);

  }

  return (
    <div>

      <Header />
      <Stations />
      <button onClick = {getData}>logData</button>

    </div>
  );
}

export default App;
