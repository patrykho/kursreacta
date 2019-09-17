import React from 'react'
export const ProgressBar = ({ className, percent }) => {
    return (<div className={`progress-bar ${className}`}>
        <div style={{ width: `${percent}%` }}></div>
    </div>);
}
