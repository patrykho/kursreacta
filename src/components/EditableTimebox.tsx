import React from 'react';
import {TimeBoxEditor} from './TimeBoxEditor';
import {CurrentTimeBox} from './CurrentTimeBox';
class EditableTimebox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Uczę się skrótów klawiszowych',
      totalTimeInMinutes: 2,
      isEditable: true,
    };
  }

  handleTitle = e => {
    const newTitle = e.target.value;
    this.setState({
      title: newTitle,
    });
  };
  handleTime = e => {
    const newTime = e.target.value;
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
