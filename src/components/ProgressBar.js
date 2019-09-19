import React from 'react'
import classN from 'classnames'

export const ProgressBar = ({ className, percent }) => {
    const progressClassName = classN(
        "progress-bar",
        className
    )

    return (<div className={progressClassName}>
        <div style={{ width: `${percent}%` }}></div>
    </div>);
}
