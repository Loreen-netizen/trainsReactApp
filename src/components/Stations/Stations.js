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
            <ul className="stationsList">
                <li className="listItems"><StationIcon/> Loading stations.....</li>
                <li className="listItems"><StationIcon/> Loading stations.....</li>
                <li className="listItems"><StationIcon/> Loading stations.....</li>
                <li className="listItems"><StationIcon/> Loading stations.....</li>
                <li className="listItems"><StationIcon/> Loading stations.....</li>
                <li className="listItems"><StationIcon/> Loading stations.....</li>
               
            </ul>)

    }
    return (

        <div>

            <ul className="stationsList">
                {
                    Object
                    .keys(stations)
                    .map(id => ({
                        id,
                        name: stations[id]
                    }))
                    .map(({id,name}) => <li className="listItems" key={id}><StationIcon/><a href={`#/station/${id}`} className="stationLink">{name}</a></li>)
                }

            </ul>
        </div>

    )
}



export default Stations;