import { useEffect, useState } from 'react'
import '../styles/Card.css'

function Card({ pokemon, score, shufflePokemon}) {
    const [pokemonImg, setPokemonImg] = useState(null);
    const [clicked, setClicked] = useState(false);

    // mark card as unclicked if score was reset
    if (clicked && score.currentScore === 0) setClicked(false);

    function handleScore() {
        if (clicked) {
            // if hard has been clicked already reset score to zero
            score.setCurrentScore(0);
        } else {
            // increment score, update top score if needed and mark card as clicked
            score.setCurrentScore(score.currentScore + 1);
            score.currentScore + 1 > score.topScore 
            ? score.setTopScore(score.currentScore + 1) 
            : null;
            setClicked(true);
        }
    }

    function handleClick() {
        handleScore();
        shufflePokemon();
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => response.json())
        .then(response => setPokemonImg(response.sprites.other.dream_world.front_default));
    }, [pokemon])

    return (
        <div className="pokemon-card" onClick={handleClick}>
            <img className="pokemon-image" src={pokemonImg} alt={"Picture of a " + pokemon} />
            <p className="pokemon-name">{pokemon}</p>
        </div>
    )
}

export default Card