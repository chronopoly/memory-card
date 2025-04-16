export default function Scoreboard({currentScore, topScore}) {
    return (
        <div>
            <p>Current score: {currentScore}</p>
            <p>Top score: {topScore}</p>
        </div>
    )
}