import React from "react";
import {useState} from "react"

function PlantCard({name, image, price}) {
  
  const [inStock, setInStock] = useState(true)

  function handleToggleStock() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleToggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
