import "./GelUserData.css";
import GetUserDataItem from "./GetUserDataItem.js";
import { useState, useEffect } from "react";

const DataList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/callBackTo")
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

  const allData = items.map((item) => (
    <GetUserDataItem
      key={item.id}
      name={item.name}
      phone={item.phone}
      dateTime={item.dateTime}
    />
  ));

  if (error) {
    return alert("Ошибка загрузки данных");
  } else if (!isLoaded) {
    return <div className="data-list-loading"></div>;
  } else {
    return (
      <section>
        <h2>User data list</h2>
        <ul className="data-list">{allData}</ul>
      </section>
    );
  }
};

export default DataList;
