import TrainIcon from "../TrainIcon/TrainIcon";
import "../SingleStation/SingleStation.css";
import "./TrainTimes.css";
const TrainTimes = ({ trainId }) => {
  return (
    <div>
      <h3>
        <TrainIcon />
        <span className="trainsList">Train #{trainId}</span>
      </h3>
      <ul className="trainTimesUl">
        <li className="trainListItem">14:00</li>
        <li className="trainListItem">14:00</li>
        <li className="trainListItem">14:00</li>
        <li className="trainListItem">14:00</li>
      </ul>
    </div>
  );
};

export default TrainTimes;
