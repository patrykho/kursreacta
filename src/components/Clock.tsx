import * as React from 'react';

interface ClockInterface {
  className: string;
  minutes: number;
  seconds: number;
}

export const Clock = ({
  className,
  minutes = 10,
  seconds = 33,
}: ClockInterface) => {
  return (
    <h2 className={`clock ${className}`}>
      Pozostało {minutes > 9 ? minutes : `0${minutes}`}:{seconds>9? seconds: `0${seconds}`}
    </h2>
  );
};
