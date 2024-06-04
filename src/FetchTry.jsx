import React, { useEffect, useState } from "react";

const FetchTry = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setArray(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {array.map((items, index) => {
          return (
            <li key={index}>
              {items.id} - {items.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchTry;
