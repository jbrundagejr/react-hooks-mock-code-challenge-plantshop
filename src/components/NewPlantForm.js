import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const [newPlantName, setNewPlantName] = useState("")
  const [newPlantImg, setNewPlantImg] = useState("")
  const [newPlantPrice, setNewPlantPrice] = useState("")

function typedPlantName(e){
  setNewPlantName(e.target.value)
}

function typedPlantImg(e){
  setNewPlantImg(e.target.value)
}

function typedPlantPrice(e){
  setNewPlantPrice(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
 const data = {
   plant: {
  name: newPlantName,
  image: newPlantImg,
  price: newPlantPrice
   }
}
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => onAddPlant(data.plant))
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange={typedPlantName}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlantImg} onChange={typedPlantImg}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantPrice} onChange={typedPlantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
