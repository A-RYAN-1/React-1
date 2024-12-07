import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Mumbai", "Chennai", "Kolkata", "Bengaluru", "Pune"];

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1> List of Indian Cities </h1>
      {items.length === 0 && <p> No item found </p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
