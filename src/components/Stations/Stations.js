import "./Stations.css"
import { useEffect, useState } from "react";
import StationIcon from "../StationIcon/StationIcon"
const Stations = () => {

    const [stations, setStations] = useState(null);

    const getData = async () => {
        const response = await fetch("/data/stations.json");
        const data = await response.json()
        console.log(data)
        setStations(data)
    }

    useEffect(() => getData(), [],)

    if (!stations) {
        return (
            <div className="stationsList">
                <h2 className="listItems"><StationIcon/> Loading stations.....</h2>
                <h2 className="listItems"><StationIcon/> Loading stations.....</h2>
                <h2 className="listItems"><StationIcon/> Loading stations.....</h2>
                <h2 className="listItems"><StationIcon/> Loading stations.....</h2>
                <h2 className="listItems"><StationIcon/> Loading stations.....</h2>
        
            </div>)

    }
    return (

        <div className="stationsList">
                {
                    Object
                    .keys(stations)
                    .map(id => ({
                        id,
                        name: stations[id]
                    }))
                    .map(({id,name}) => <h2 className="listItems" key={id}><StationIcon/><a href={`#/station/${id}`} className="stationLink">{name}</a></h2>)
                }

            </div>
       

    )
}



export default Stations;