import React from 'react'

function Result( {score, playAgain} ) {
    return (
        <div className="score-board">
            <div className="score">You scored {score}</div>
            <button className="playBtn" onClick ={playAgain}>
                Play Again
            </button>
        </div>
    )
}

export default Result
