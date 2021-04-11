import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchedPlant, setSearchedPlant] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then((data) => {
        setPlants(data)
      })
  }, [])  
  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchedPlant.toLowerCase()) 
  )

  return (
    <main>
      <NewPlantForm 
      onAddPlant={handleAddPlant}/>
      <Search 
      searchedPlant={searchedPlant}
      onSearchPlant={setSearchedPlant}
      />
      <PlantList 
      plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
