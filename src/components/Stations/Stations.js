import "./Stations.css"
import { useEffect, useState } from "react";

const Stations = () => {

    const [data, setData] = useState(null);

    const getData = async () => {
        const response = await fetch("/data/stations.json");
        const data = await response.json()
        console.log(data)
        setData(data)
    }

    useEffect(() => getData(), [],)

    if (!data) {
        return (
            <ul className="stationsList">
                <li className="listItems"> Loading stations.....</li>
                <li className="listItems"> Loading stations.....</li>
                <li className="listItems"> Loading stations.....</li>
                <li className="listItems"> Loading stations.....</li>
                <li className="listItems"> Loading stations.....</li>
            </ul>)

    }
    return (

        <div>

            <ul>
                {
                    // Object
                    //     .keys(data)
                    //     .map(id => data[id])
                    //     .map(name => <li key={name}>{name}</li>)
                    Object.keys(data).map(id => data[id]).map(name => <li key={name}>{name}</li>)
                }

            </ul>
        </div>

    )
}



export default Stations;