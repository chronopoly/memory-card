import '../styles/Scoreboard.css'

export default function Scoreboard({currentScore, topScore, setTopScore}) {
    
    return (
        <div className='scoreboard'>
            <p>Current score: {currentScore}</p>
            <p>Top score: {topScore}</p>
        </div>
    )
}