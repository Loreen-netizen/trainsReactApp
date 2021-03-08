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
       
        setTrains(data)
    }
    

    useEffect(() => getData(), [],)
    
    // const { id } = useParams()

    return (
        <div>
            <ul>
            {Object.keys(trains).map(letter => <li> Train {letter} </li>)}
        </ul>
        </div>
        
    )
}

export default SingleStation;