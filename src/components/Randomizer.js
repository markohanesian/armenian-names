import React, { useState } from "react";

const Randomizer = () => {
    const startingName = [{ id: 0, meaning: "Update Name!" }];
  
    const nameList = [
        { id: 1, name: 'Astghik', meaning: 'little star' }, 
        { id: 2, name: 'Tagouhi', meaning: 'Queen' }, 
        { id: 3, name: 'Lusine', meaning: 'Moon' }]
    ;
  
    const [randomIndex, setRandomIndex] = React.useState(-1);
  
    const data = randomIndex !== -1 ? nameList[randomIndex] : startingName[0];
  
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.meaning}</p>
        <button onClick={() => setRandomIndex(Math.floor(Math.random() * nameList.length))}>
          Get Random 
        </button>
      </div>
    );
  };
  
  export default Randomizer;