import React from 'react'

export const Clock = ({ className, minutes = 10, seconds = 33 }) => {
    return <h2 className={`clock ${className}`}>Pozostało {minutes}:{seconds}</h2>;
}
