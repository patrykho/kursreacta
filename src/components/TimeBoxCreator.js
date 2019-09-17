import React, { useRef } from 'react'
import uuid from 'uuid'

export const TimeBoxCreator = ({ onCreate }) => {

    const titleRef = useRef(null)
    const timeRef = useRef(null)

    const handleSumbmit = (e) => {
        e.preventDefault();
        onCreate({ id: uuid.v4(), title: titleRef.current.value, totalTimeInMinutes: timeRef.current.value });
    };
    return (<form onSubmit={handleSumbmit} className="time-box-editor">
        <label >Co robisz? <input type="text" ref={titleRef} /></label>
        <label >Ile minut? <input type="number" ref={timeRef} /></label>
        <button>Dodaj timebox </button>

    </form>);
}
