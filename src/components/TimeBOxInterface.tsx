import {MouseEventHandler} from 'react';

export interface TimeBOxInterface {
  title: string;
  index: number;
  totalTimeInMinutes: number;
  onDelete: Function;
  onEdit: Function;
}
