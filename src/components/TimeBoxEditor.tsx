import React from 'react';

interface TimeBoxEditorInterface {
  title: string;
  totalTimeInMinutes: number;
  handleTitle: (event: React.FormEvent<HTMLInputElement>) => void;
  handleTime: (event: React.FormEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  isEditable: boolean;
}
export const TimeBoxEditor = (props: TimeBoxEditorInterface) => {
  const {
    title,
    totalTimeInMinutes,
    handleTitle,
    handleTime,
    onConfirm,
    isEditable,
  } = props;
  return (
    <div className={`time-box-editor ${isEditable ? '' : 'inactive'}`}>
      <label>
        Co robisz?
        <input
          disabled={!isEditable}
          onChange={handleTitle}
          value={title}
          type='text'
        />
      </label>
      <label>
        Ile minut?{' '}
        <input
          disabled={!isEditable}
          onChange={handleTime}
          value={totalTimeInMinutes}
          type='number'
        />
      </label>
      <button disabled={!isEditable} onClick={onConfirm}>
        Zatwierdź zmiany
      </button>
    </div>
  );
};
