import '../styles/Scoreboard.css'

export default function Scoreboard({currentScore, topScore, handleRestart}) {

    return (
        <div className='scoreboard'>
            {currentScore === 12 ? <p>You won!</p> : <p>Current score: {currentScore}</p>}
            {currentScore === 12 ? <button className='restart-button' onClick={handleRestart}>Restart</button> : <p>Top score: {topScore}</p>}
        </div>
    )
}