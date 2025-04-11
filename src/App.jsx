import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import shuffleArray from './utils/shuffleArray';

function App() {
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

  function handleClick() {
    const newList = pokemonList;
    setPokemonList([...shuffleArray(newList)]);
  }

  return (
    <>
      {pokemonList.map(pokemon => <Card pokemonName={pokemon} key={pokemon} onClick={handleClick} />)}
    </>
  )
}

export default App
