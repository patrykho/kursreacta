import React from 'react'


export const TimeBox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => {

    if (totalTimeInMinutes <= 0) {
        throw new Error("Całkowity czas musi być większy niz zero ")
    }
    return (<>
        <div className="card time-box-editor">
            <header className="card-header">
                <p className="card-header-title">
                    TimeBox
          </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <h3> {title} - {totalTimeInMinutes} min.</h3>
                </div>
            </div>
            <button onClick={onDelete} className=" button is-danger">Delete</button>
            <button onClick={onEdit} className="button is-primary">Edit</button>
        </div >
    </>);
}
