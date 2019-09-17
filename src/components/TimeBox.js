import React from 'react'


export const TimeBox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => {
    return (<>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Component
          </p>
                <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br></br>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" onClick={onDelete} className="card-footer-item">Delete</a>
                <a href="#" onClick={onEdit} className="card-footer-item">Edit</a>

            </footer>
        </div >

        <div className="time-box">
            <h3> {title} - {totalTimeInMinutes} min.</h3>
            <button className="button is-danger" onClick={onDelete}> Usuń </button>
            <button className="button is-primary" onClick={onEdit}> Zmień </button>

        </div>
    </>);
}
