import React from 'react'
export const TimeBoxEditor = (props) => {
    const { title, totalTimeInMinutes, handleForm, handleTitle, handleTime, onConfirm, isEditable } = props;
    return (<div className={`time-box-editor ${isEditable ? "" : "inactive"}`}>
        <label>Co robisz? <input disabled={!isEditable} onChange={handleTitle} value={title} type="text" /></label>
        <label>Ile minut? <input disabled={!isEditable} onChange={handleTime} value={totalTimeInMinutes} type="number" /></label>
        <button disabled={!isEditable} onClick={onConfirm}>Zatwierdź zmiany</button>
    </div>);
}
