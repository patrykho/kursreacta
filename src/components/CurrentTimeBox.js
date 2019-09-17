import React from 'react'
import { Clock } from './Clock'
import { ProgressBar } from './ProgressBar'
export class CurrentTimeBox extends React.Component {
    state = {
        isRunning: false,
        isPaused: false,
        pausesCount: 0,
        elapsedTimeInSeconds: 0
    };
    handleStop = () => {
        this.setState({
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        });
        this.stopTimer();
    };
    handleStart = () => {
        this.setState({
            isRunning: true
        });
        this.startTimer();
    };
    togglePause = () => {
        this.setState((prevState) => {
            console.log(!prevState.isPaused);
            const isPaused = !prevState.isPaused;
            if (isPaused) {
                this.stopTimer();
            }
            else {
                this.startTimer();
            }
            return {
                isPaused,
                pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount
            };
        });
    };
    stopTimer = () => {
        window.clearInterval(this.intervalId);
    };
    startTimer = () => {
        this.intervalId = window.setInterval(() => {
            this.setState((prevState) => ({
                elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.01
            }));
        }, 10);
    };
    render() {
        const { isRunning, isPaused, pausesCount, elapsedTimeInSeconds } = this.state;
        const { title, totalTimeInMinutes, onConfirm, isEditable } = this.props;
        const totalTimeInSeconds = totalTimeInMinutes * 60;
        const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
        const timeLeftInSecondstest = (timeLeftInSeconds > 0) ? timeLeftInSeconds : 0;
        const minutesLeft = Math.floor(timeLeftInSecondstest / 60);
        const secondsLeft = Math.floor(timeLeftInSecondstest % 60);
        const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
        const progressInPercenttest = (timeLeftInSeconds > 0) ? progressInPercent : 99.5;
        return (<div className={`current-time-box ${!isEditable ? "" : "inactive"}`}>
            <h1>{title}</h1>
            <Clock className={isPaused ? "inactive" : ""} minutes={minutesLeft} seconds={secondsLeft} />
            <ProgressBar percent={progressInPercenttest} className={isPaused ? "inactive" : ""} />

            <button onClick={onConfirm} disabled={isEditable}>EDIT</button>
            <button onClick={this.handleStart} disabled={isRunning}>Start</button>
            <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
            <button onClick={this.togglePause} disabled={!isRunning}>{isPaused ? "Wznów" : "Pauzuj"}</button>
            Liczba przerw {pausesCount}
        </div>);
    }
}
