import { useState } from 'react'
import './App.css'
import Card from './components/Card'
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
      {pokemonList.map(pokemon => {
        return <Card 
          pokemon={pokemon}
          key={pokemon}
          score={{currentScore, topScore, setCurrentScore, setTopScore}}
          shufflePokemon={shufflePokemon}   
          />
        })}
    </>
  )
}

export default App
