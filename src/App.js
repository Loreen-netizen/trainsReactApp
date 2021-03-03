import './App.css';
// import stations from "./stations.json";
// import trains from "./trains.json";

const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json();
  console.log(data)
}


function App() {
  getData('/data/stations.json')
  getData('/data/trains.json')
  return (
    <div className="App">
<h1>Train Schedule</h1>
<h5>no need to be late, always use trains app!</h5>
    </div>
  );
}

export default App;
