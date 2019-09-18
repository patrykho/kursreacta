import React, { useRef } from 'react'
import uuid from 'uuid'

export const TimeBoxCreator = ({ dataToUpdate, editing, onCreate }) => {
    // const { indexToUpdate, title, time } = dataToUpdate
    const titleRef = useRef(null)
    const timeRef = useRef(null)



    const handleSumbmit = (e) => {
        e.preventDefault();
        onCreate({ id: uuid.v4(), title: titleRef.current.value, totalTimeInMinutes: timeRef.current.value });
        titleRef.current.value = ""
        timeRef.current.value = ""

    }

    return (<>

        {editing && dataToUpdate ? (<p>{dataToUpdate.title} {dataToUpdate.indexToUpdate} {dataToUpdate.time}</p >) : (<form onSubmit={handleSumbmit} className="time-box-editor">
            <label >Co robisz? <input type="text" ref={titleRef} /></label>
            <label >Ile minut? <input type="number" ref={timeRef} /></label>
            <button>Dodaj timebox </button>
        </form>)}

    </>)
}
