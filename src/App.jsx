import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Scoreboard from './components/Scoreboard';
import shuffleArray from './utils/shuffleArray';

function App() {
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([
    "Bulbasaur",
    "Charmander",
    "Squirtle", 
    "Caterpie", 
    "Pidgey", 
    "Rattata",
    "Pikachu",
    "Vulpix", 
    "Gloom", 
    "Zubat", 
    "Meowth", 
    "Psyduck", 
  ]);

  function shufflePokemon() {
    const newList = pokemonList;
    setPokemonList([...shuffleArray(newList)]);
  }

  return (
    <>
      <Scoreboard currentScore={currentScore} topScore={topScore} setTopScore={setTopScore} />
      <div className='card-container'>
        {pokemonList.map(pokemon => {
          return <Card 
            pokemon={pokemon}
            key={pokemon}
            score={{currentScore, setCurrentScore}}
            shufflePokemon={shufflePokemon}   
            />
          })}
      </div>
    </>
  )
}

export default App
