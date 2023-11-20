import "./css/App.css";
import { useState } from 'react';
import Animal from "./components/Animal";

function getRandomAnimal(){
  const animalNames = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animalNames[Math.floor(Math.random() * animalNames.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  function handleClick(){
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedComponents = animals.map((animal, index) => {
    return <Animal type={animal} key={index} />
  });

  return (
    <div className="container">
      <button onClick={handleClick}>Add Animal</button>
      <div className="content">{renderedComponents}</div>
    </div>
  );
}

export default App;
