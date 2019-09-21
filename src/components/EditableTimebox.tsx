import React, {SyntheticEvent, MouseEvent} from 'react';
import {TimeBoxEditor} from './TimeBoxEditor';
import {CurrentTimeBox} from './CurrentTimeBox';

interface IState {
  title: string;
  totalTimeInMinutes: number;
  isEditable: boolean;
}
class EditableTimebox extends React.Component<{}, IState> {
  public state = {
    title: 'Uczę się skrótów klawiszowych',
    totalTimeInMinutes: 2,
    isEditable: true,
  };

  handleTitle = (event: React.FormEvent<HTMLInputElement>): void => {
    const newTitle: string = event.currentTarget.value;
    this.setState({
      title: newTitle,
    });
  };
  handleTime = (event: React.FormEvent<HTMLInputElement>): void => {
    const newTime: number = event.currentTarget.value
      ? parseInt(event.currentTarget.value, 10)
      : 0;
    this.setState({
      totalTimeInMinutes: newTime,
    });
  };
  onConfirm = () => {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };
  render() {
    const {title, totalTimeInMinutes, isEditable} = this.state;
    const {handleTime, handleTitle, onConfirm} = this;
    return (
      <>
        <React.StrictMode>
          <TimeBoxEditor
            onConfirm={onConfirm}
            handleTime={handleTime}
            handleTitle={handleTitle}
            isEditable={isEditable}
            title={title}
            totalTimeInMinutes={totalTimeInMinutes}
          />
          <CurrentTimeBox
            title={title}
            isEditable={isEditable}
            onConfirm={onConfirm}
            totalTimeInMinutes={totalTimeInMinutes}
          />
        </React.StrictMode>
      </>
    );
  }
}

export default EditableTimebox;
