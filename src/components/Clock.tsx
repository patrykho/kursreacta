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
      Pozostało {minutes}:{seconds}
    </h2>
  );
};
