import { useEffect, useState } from 'react'
import '../styles/Card.css'

function Card( { pokemonName }) {
    const [pokemonImg, setPokemonImg] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then(response => response.json())
        .then(response => setPokemonImg(response.sprites.other.dream_world.front_default));
    })

    return (
        <div className="pokemon-card">
            <img className="pokemon-image" src={pokemonImg} alt="Image of a pokemon" />
            <p className="pokemon-name">{pokemonName}</p>
        </div>
    )
}

export default Card