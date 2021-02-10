import "./GetUserLocationItem.css";

const GetUserLocationItem = ({
  latitude,
  longitude,
  dateTime,
  /*   userAddress, */
}) => {
  return (
    <div className="location-item-container">
      <div className="location-item-user">
        <span>Latitude: {latitude}</span>
        <span>Longitude: {longitude}</span>
        <span>Date: {dateTime}</span>
        {/*  <span>{userAddress}</span> */}
      </div>
    </div>
  );
};

export default GetUserLocationItem;
