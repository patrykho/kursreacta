import * as React from 'react';
import {SyntheticEvent} from 'react';

import {Clock} from './Clock';
import {ProgressBar} from './ProgressBar';
import {getMinutesAndSecondsFromDurationInSeconds} from '../lib/time';

interface CurrentTimeBoxState {
  isRunning: boolean;
  isPaused: boolean;
  pausesCount: number;
  elapsedTimeInSeconds: number;
}

interface CurrentTimeBoxProps {
  onConfirm: Function;
  title: string;
  totalTimeInMinutes: number;
  isEditable: boolean;
}

var intervalSetup: any = null;
export class CurrentTimeBox extends React.Component<
  CurrentTimeBoxProps,
  CurrentTimeBoxState
> {
  state = {
    isRunning: false,
    isPaused: false,
    pausesCount: 0,
    elapsedTimeInSeconds: 0,
  };

  handleStop = () => {
    this.setState({
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      elapsedTimeInSeconds: 0,
    });
    this.stopTimer();
  };
  handleStart = (e: SyntheticEvent) => {
    e.persist();
    console.log(
      '%c this.state: ',
      'color: orange; background: black; font-size: 24px;',
    );
    console.table(this.state);

    this.setState({
      isRunning: true,
    });
    this.startTimer();
  };
  togglePause = () => {
    this.setState(prevState => {
      const isPaused = !prevState.isPaused;
      if (isPaused) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
      return {
        isPaused,
        pausesCount: isPaused
          ? prevState.pausesCount + 1
          : prevState.pausesCount,
      };
    });
  };
  stopTimer = () => {
    window.clearInterval(intervalSetup);
    intervalSetup = null;
  };
  startTimer = () => {
    if (intervalSetup === null) {
      intervalSetup = window.setInterval(() => {
        console.log('timer works: ', this.state.elapsedTimeInSeconds);

        if (
          this.state.elapsedTimeInSeconds >=
          this.props.totalTimeInMinutes * 60
        ) {
          this.stopTimer();
        }
        this.setState(prevState => ({
          elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1,
        }));
      }, 1000);
    }
  };

  editCurrentTimeBox = () => {
    this.handleStop();
    this.props.onConfirm();
  };
  render() {
    console.count('render');
    const {isRunning, isPaused, pausesCount, elapsedTimeInSeconds} = this.state;
    const {title, totalTimeInMinutes, isEditable} = this.props;
    const totalTimeInSeconds = totalTimeInMinutes * 60;
    const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
    const timeLeftInSecondstest = timeLeftInSeconds > 0 ? timeLeftInSeconds : 0;

    const [
      minutesLeft,
      secondsLeft,
    ] = getMinutesAndSecondsFromDurationInSeconds(timeLeftInSecondstest);

    const progressInPercent =
      (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
    const progressInPercenttest =
      timeLeftInSeconds > 0 ? progressInPercent : 99.5;
    return (
      <div className={`current-time-box ${!isEditable ? '' : 'inactive'}`}>
        <h1>{title}</h1>
        <Clock
          className={isPaused ? 'inactive' : ''}
          minutes={minutesLeft}
          seconds={secondsLeft}
        />
        <ProgressBar
          percent={progressInPercenttest}
          className={isPaused ? 'inactive' : ''}
        />
        <button onClick={this.editCurrentTimeBox} disabled={isEditable}>
          EDIT
        </button>
        <button onClick={this.handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={this.togglePause} disabled={!isRunning}>
          {isPaused ? 'Wznów' : 'Pauzuj'}
        </button>
        Liczba przerw {pausesCount}
      </div>
    );
  }
}
