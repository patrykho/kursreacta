import React from 'react'

export const Clock = ({ className, minutes = 10, seconds = 33 }) => {
    return <h2 style={{ backgroundColor: "#533003" }} className={`clock ${className}`}>Pozostało {minutes}:{seconds}</h2>;
}
