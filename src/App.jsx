import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import shuffleArray from './utils/shuffleArray';

function App() {
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([
    {name: "Bulbasaur", clicked: false},
    {name: "Charmander", clicked: false},
    {name: "Squirtle", clicked: false},
    {name: "Caterpie", clicked: false},
    {name: "Pidgey", clicked: false},
    {name: "Rattata", clicked: false},
    {name: "Pikachu", clicked: false},
    {name: "Vulpix", clicked: false},
    {name: "Gloom", clicked: false},
    {name: "Zubat", clicked: false},
    {name: "Meowth", clicked: false},
    {name: "Psyduck", clicked: false},
  ]);

  function shufflePokemon() {
    const newList = pokemonList;
    setPokemonList([...shuffleArray(newList)]);
  }

  function handleScore(pokemon) {
    if (pokemon.clicked) {
      // if card has been clicked before set score to zero and mark all cards as unclicked
      setCurrentScore(0);
      const newList = [...pokemonList];
      newList.forEach(pokemon => {pokemon.clicked = false});
      setPokemonList(newList);
    } else {
      // increment the score, update top score if needed, and mark card as clicked
      setCurrentScore(currentScore + 1);
      currentScore + 1 > topScore ? setTopScore(currentScore + 1) : null;
      const newList = [...pokemonList];
      newList.forEach(element => {
        if (element.name === pokemon.name) element.clicked = true;
      });
      setPokemonList(newList);
    }
    shufflePokemon();
  }

  return (
    <>
      {pokemonList.map(pokemon => {
        return <Card 
          pokemon={pokemon}
          key={pokemon.name}
          handleScore={handleScore}/>
        })}
    </>
  )
}

export default App
