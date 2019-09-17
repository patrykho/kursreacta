import React from 'react'


export const TimeBox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => {
    return (<>
        <div className="card time-box-editor">
            <header className="card-header">
                <p className="card-header-title">
                    TimeBox
          </p>
                <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <h3> {title} - {totalTimeInMinutes} min.</h3>


                </div>
            </div>
            <footer className="card-footer">
                <a href="#" onClick={onDelete} className="card-footer-item button is-danger">Delete</a>
                <a href="#" onClick={onEdit} className="card-footer-item button is-primary">Edit</a>

            </footer>
        </div >


    </>);
}
