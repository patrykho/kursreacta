import React from 'react';
import {TimeBOxInterface} from './TimeBox.Interface';

export const TimeBox = ({
  title,
  totalTimeInMinutes,
  onDelete,
  onEdit,
  index,
}: TimeBOxInterface) => {
  if (totalTimeInMinutes <= 0) {
    throw new Error('The total time must be greater than zero');
  }
  return (
    <>
      <div className='card time-box-editor'>
        <header className='card-header'>
          <p className='card-header-title'>TimeBox</p>
        </header>
        <div className='card-content'>
          <div className='content'>
            <h3>
              {' '}
              {title} - {totalTimeInMinutes} min.
            </h3>
          </div>
        </div>
        {/* @ts-ignore */}
        <button
          onClick={() => {
            onDelete();
          }}
          className=' button is-danger'
        >
          Delete
        </button>
        {/* @ts-ignore */}
        <button
          onClick={() => {
            onEdit(index, title, totalTimeInMinutes);
          }}
          className='button is-primary'
        >
          Edit
        </button>
      </div>
    </>
  );
};
