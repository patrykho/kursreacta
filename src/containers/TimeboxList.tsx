import React from 'react';
import uuid from 'uuid';
import {TimeBox} from '../components/TimeBox';
import {TimeBoxCreator} from '../components/TimeBoxCreator';
import {Modal} from '../components/Modal';
import {ErrorBoundary} from './ErrorBoundary';
import {TimeBOxInterface} from '../components/TimeBOxInterface';
interface Istate {
  timeboxes: never[];
  editing: boolean;
  dataToUpdate: {
    indexToUpdate: number;
    title: string;
    time: number;
  };
}
export class TimeboxList extends React.Component<{}, Istate> {
  public state = {
    timeboxes: [],
    editing: false,
    dataToUpdate: {
      indexToUpdate: 0,
      title: '',
      time: 0,
    },
  };

  toggleModal = () => {
    console.log('toggleModal');
    this.setState({
      editing: false,
    });
  };

  addTimeBox = (timebox: any) => {
    this.setState(prevState => {
      const timeboxes: any = [timebox, ...prevState.timeboxes];
      return {timeboxes};
    });
  };
  handleCreate = (data: any) => {
    this.addTimeBox(data);
  };
  removeTimeBox = (indexToRemove: number): void => {
    this.setState(prevState => {
      const timeboxes = prevState.timeboxes.filter(
        (timebox: any, index: number) => index !== indexToRemove,
      );
      return {timeboxes};
    });
  };
  updateTimebox = (indexToUpdate: number, title: string, time: number) => {
    this.setState({
      editing: true,
      dataToUpdate: {indexToUpdate, title, time},
    });
    const dataToUpdare = {
      id: indexToUpdate,
      title,
      totalTimeInMinutes: time,
    };
    console.log(
      'indexToUpdate: ',
      indexToUpdate,
      ' title: ',
      title,
      ' time ',
      time,
    );
    this.setState(prevState => {
      const timeboxes: any = prevState.timeboxes.map(
        (timebox: any, index: number) =>
          index === indexToUpdate ? dataToUpdare : timebox,
      );
      return {timeboxes};
    });
  };
  render() {
    const {editing, dataToUpdate} = this.state;
    return (
      <>
        <TimeBoxCreator onCreate={this.handleCreate} />
        <ErrorBoundary message={'Wystąpił błąd'}>
          {editing ? (
            <Modal
              updateTimebox={this.updateTimebox}
              toggleModal={this.toggleModal}
              dataToUpdate={dataToUpdate}
            />
          ) : (
            ''
          )}
          {this.state.timeboxes.map(
            (timebox: TimeBOxInterface, index: number) => (
              <TimeBox
                onDelete={() => this.removeTimeBox(index)}
                onEdit={() =>
                  this.updateTimebox(
                    index,
                    timebox.title,
                    timebox.totalTimeInMinutes,
                  )
                }
                index={index}
                key={index}
                title={timebox.title}
                totalTimeInMinutes={timebox.totalTimeInMinutes}
              />
            ),
          )}
        </ErrorBoundary>
      </>
    );
  }
}
