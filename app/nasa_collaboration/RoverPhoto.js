const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <li>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img
        src={src}
        alt={`photo of rover ${roverName}`}
        title={`photo of rover ${roverName}`}
      />
    </li>
  );
};

export default RoverPhoto;
