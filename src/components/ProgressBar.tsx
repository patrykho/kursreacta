import React from 'react';
import classN from 'classnames';

interface ProgressBarInterface {
  className: string;
  percent: number;
}

export const ProgressBar = ({className, percent}: ProgressBarInterface) => {
  const progressClassName = classN('progress-bar', className);

  return (
    <div className={progressClassName}>
      <div style={{width: `${percent}%`}}></div>
    </div>
  );
};
