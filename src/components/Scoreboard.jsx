export default function Scoreboard({currentScore, topScore, setTopScore}) {

    if (currentScore > topScore) setTopScore(currentScore);
    
    return (
        <div>
            <p>Current score: {currentScore}</p>
            <p>Top score: {topScore}</p>
        </div>
    )
}