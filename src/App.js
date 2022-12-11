import React, { useState, useEffect } from "react";
import StarshipCard from "./StarShipCard";
import './App.css';

function App() {
  const [shipModel, setShipModel] = useState(null)
  
  

  useEffect(() => {
    const shipURL =`https://swapi.dev/api/starships/`;
    const makeApiCall = async() => {
      const res= await fetch(shipURL);
      const json = await res.json();
      setShipModel(json)
      console.log(json)
    };
    makeApiCall();

  }, []);

  // const shipArray = shipModel.results
  // console.log(shipArray)

  const shipNames = shipModel?.results.map((ele, index) => {
  
    return (
      <div className='container'>
<StarshipCard 
key={index}
{...ele}
/>
      </div>
    )
  })  

  return (
    <div>
   <h1>STAR WARS API</h1>
<section>
{shipNames}
</section>
</div>
  );
}

export default App;