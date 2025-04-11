import { useState } from 'react'
import './App.css'
import Card from './components/Card'

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

  return (
    <>
      {pokemonList.map(pokemon => <Card pokemonName={pokemon} />)}
    </>
  )
}

export default App
