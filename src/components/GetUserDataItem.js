import "./GetUserDataItem.css";

const GetUserDataItem = ({ name, phone, dateTime }) => {
  return (
    <div className="data-item-container">
      <div className="data-item-user">
        <span>Name: {name}</span>
        <span>Phone: {phone}</span>
        <span>Date: {dateTime}</span>
      </div>
    </div>
  );
};

export default GetUserDataItem;
