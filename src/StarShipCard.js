import React from 'react';

const StarShip= ({name,model,starship_class})=>{
  return(
  <div className='starwars'>
    <h2>Name: {name}</h2>

    <h2>Model: {model}</h2>

    <h2>Class: {starship_class}</h2>

  </div>
  )
}


   

 

export default StarShip;