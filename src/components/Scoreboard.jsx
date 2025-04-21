import '../styles/Scoreboard.css'

export default function Scoreboard({currentScore, topScore, setTopScore}) {

    if (currentScore > topScore) setTopScore(currentScore);
    
    return (
        <div className='scoreboard'>
            <p>Current score: {currentScore}</p>
            <p>Top score: {topScore}</p>
        </div>
    )
}