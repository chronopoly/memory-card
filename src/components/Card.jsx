import { useEffect, useState } from 'react'
import '../styles/Card.css'

function Card({ pokemon, handleScore }) {
    const [pokemonImg, setPokemonImg] = useState(null);

    function handleClick() {
        // copy the pokemon object so we can pass it as an argument to handleScore in App
        const pokemonCopy = {...pokemon};
        handleScore(pokemonCopy);
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
        .then(response => response.json())
        .then(response => setPokemonImg(response.sprites.other.dream_world.front_default));
    }, [pokemon.name])

    return (
        <div className="pokemon-card" onClick={handleClick}>
            <img className="pokemon-image" src={pokemonImg} alt={"Picture of a " + pokemon.name} />
            <p className="pokemon-name">{pokemon.name}</p>
        </div>
    )
}

export default Card