import React from 'react'
import uuid from 'uuid'
export const TimeBoxCreator = ({ onCreate }) => {
    const handleSumbmit = (e) => {
        e.preventDefault();
        onCreate({ id: uuid.v4(), title: "Nowy timeboxssf", totalTimeInMinutes: 6 });
    };
    return (<form onSubmit={handleSumbmit} className="time-box-editor">
        <label>Co robisz? <input type="text" /></label>
        <label>Ile minut? <input type="number" /></label>
        <button>Dodaj timebox </button>

    </form>);
}
