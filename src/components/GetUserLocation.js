import "./GetUserLocation.css";
import GetUserLocationItem from "./GetUserLocationItem";
import { useState, useEffect } from "react";

const LocationList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/userLocation")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          if (error) {
            console.log(error.message);
          } else {
            setIsLoaded(true);
            setError(error);
          }
        }
      );
  }, []);

  const allLocations = items.map((item) => (
    <GetUserLocationItem
      key={item.id}
      latitude={item.latitude}
      longitude={item.longitude}
      dateTime={item.dateTime}
      /*userAddress={item.userAddress}*/
    />
  ));

  if (error) {
    return alert("Ошибка загрузки данных");
  } else if (!isLoaded) {
    return <div className="location-list-loading"></div>;
  } else {
    return (
      <section>
        <h2>User location list</h2>
        <ul className="location-list">{allLocations}</ul>
      </section>
    );
  }
};

export default LocationList;
