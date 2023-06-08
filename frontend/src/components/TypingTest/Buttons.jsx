import React from 'react'
import '../../styles.css'

export const StartTestButton = ({onStartClick}) => {
    return (
    <div>
        <button className="button" onClick={onStartClick}>Start Typing Test</button>
    </div>
    )
}

export const RestartButton = ({reset}) => {
    return (
    <div>
        <button className="button" onClick={reset}>New Attempt</button>
    </div>
    )
}

