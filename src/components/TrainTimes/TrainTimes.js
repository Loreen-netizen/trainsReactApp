import TrainIcon from "../TrainIcon/TrainIcon";

const TrainTimes = ({ trainId }) => {
  return (
    <div>
      <h2 className="trainsList">
        <TrainIcon />
        Train {trainId}
      </h2>
      <ul>
        <li>14:00</li>
        <li>14:00</li>
        <li>14:00</li>
      </ul>
    </div>
  );
};

export default TrainTimes;
