import "./SingleStation.css";
import {
    HashRouter,
    Switch,
    Route,
   useParams
  } from "react-router-dom";

const SingleStation = ()=>{
    const {id} = useParams()
    return(
        <div>
        you are loking at station: {id}
        </div>
    )
}

export default SingleStation;