import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantCards = plants.map(plantObj => { 
    return <PlantCard
      key={plantObj.id} 
      plant={plantObj}
      />
    })
  return (
    <ul className="cards">
      {plantCards}
    </ul>
  )}

export default PlantList;
