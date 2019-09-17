import React from 'react'
import ReactDOM from 'react-dom'
import uuid from 'uuid'


const TimeBoxEditor = (props) => {


    const { title, totalTimeInMinutes, handleForm, handleTitle, handleTime, onConfirm, isEditable } = props

    return (<div className={`time-box-editor ${isEditable ? "" : "inactive"}`}>
        <label>Co robisz? <input disabled={!isEditable} onChange={handleTitle} value={title} type="text" /></label>
        <label>Ile minut? <input disabled={!isEditable} onChange={handleTime} value={totalTimeInMinutes} type="number" /></label>
        <button disabled={!isEditable} onClick={onConfirm}>Zatwierdź zmiany</button>
    </div>)


}

class TimeboxList extends React.Component {

    state = {
        timeboxes: [
            { id: uuid.v4(), title: "Ucze sie list", totalTimeInMinutes: 25 },
            { id: uuid.v4(), title: "Ucze sie list 2", totalTimeInMinutes: 20 },
            { id: uuid.v4(), title: "Ucze sie list 3", totalTimeInMinutes: 4 },

        ]
    }

    addTimeBox = (timebox) => {
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes }
        })
    }
    handleCreate = (data) => {
        console.log("handleCreate")
        this.addTimeBox(data)
    }

    removeTimeBox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebo, index) => index !== indexToRemove)
            return { timeboxes }
        })

    }

    updateTimebox = (indexToUpdate, updatedTimebox) => {
        console.log("indexToUpdate: ", indexToUpdate, " updatedTimebox: ", updatedTimebox)
        this.setState(prevState => {

            const timeboxes = prevState.timeboxes.map((timebox, index) =>
                index === indexToUpdate ? updatedTimebox : timebox
            )

            return { timeboxes }
        })

    }
    render() {

        return (
            <>
                <TimeBoxCreator onCreate={this.handleCreate} />

                {this.state.timeboxes.map((timebox, index) => (

                    <TimeBox onDelete={() => this.removeTimeBox(index)}
                        onEdit={() => this.updateTimebox(index, { ...timebox, title: "nowy tytul" })} key={index} title={timebox.title} totalTimeInMinutes={timebox.totalTimeInMinutes} />

                ))

                }


            </>
        )
    }
}

const TimeBoxCreator = ({ onCreate }) => {

    const handleSumbmit = (e) => {

        e.preventDefault()
        onCreate({ id: uuid.v4(), title: "Nowy timeboxssf", totalTimeInMinutes: 6 })
    }
    return (
        <form onSubmit={handleSumbmit} className="time-box-editor">
            <label>Co robisz? <input type="text" /></label>
            <label>Ile minut? <input type="number" /></label>
            <button >Dodaj timebox </button>

        </form>

    )
}

class CurrentTimeBox extends React.Component {

    state = {
        isRunning: false,
        isPaused: false,
        pausesCount: 0,
        elapsedTimeInSeconds: 0
    }

    handleStop = () => {
        this.setState({
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            elapsedTimeInSeconds: 0
        })
        this.stopTimer()
    }

    handleStart = () => {
        this.setState({
            isRunning: true
        })

        this.startTimer()
    }
    togglePause = () => {
        this.setState(
            (prevState) => {
                console.log(!prevState.isPaused)

                const isPaused = !prevState.isPaused
                if (isPaused) {
                    this.stopTimer()
                }

                else {
                    this.startTimer()
                }
                return {
                    isPaused,
                    pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount
                }
            })



    }

    stopTimer = () => {
        window.clearInterval(this.intervalId)
    }
    startTimer = () => {

        this.intervalId = window.setInterval(() => {
            this.setState((prevState) => ({
                elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.01
            }))
        }, 10);
    }
    render() {
        const { isRunning, isPaused, pausesCount, elapsedTimeInSeconds } = this.state
        const { title, totalTimeInMinutes, onConfirm, isEditable } = this.props
        const totalTimeInSeconds = totalTimeInMinutes * 60
        const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds
        const timeLeftInSecondstest = (timeLeftInSeconds > 0) ? timeLeftInSeconds : 0
        const minutesLeft = Math.floor(timeLeftInSecondstest / 60)
        const secondsLeft = Math.floor(timeLeftInSecondstest % 60)
        const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0
        const progressInPercenttest = (timeLeftInSeconds > 0) ? progressInPercent : 99.5
        return (<div className={`current-time-box ${!isEditable ? "" : "inactive"}`}>
            <h1>{title}</h1>
            <Clock className={isPaused ? "inactive" : ""} minutes={minutesLeft} seconds={secondsLeft} />
            <ProgressBar percent={progressInPercenttest} className={isPaused ? "inactive" : ""} />

            <button onClick={onConfirm} disabled={isEditable}>EDIT</button>
            <button onClick={this.handleStart} disabled={isRunning}>Start</button>
            <button onClick={this.handleStop} disabled={!isRunning} >Stop</button>
            <button onClick={this.togglePause} disabled={!isRunning} >{isPaused ? "Wznów" : "Pauzuj"}</button>
            Liczba przerw {pausesCount}
        </div>)
    }



}
const Clock = ({ className, minutes = 10, seconds = 33 }) => {
    return <h2 style={{ backgroundColor: "#533003" }} className={`clock ${className}`} >Pozostało {minutes}:{seconds}</h2>
}

const ProgressBar = ({ className, percent }) => {
    return (<div className={`progress-bar ${className}`}>
        <div style={{ width: `${percent}%` }}></div>
    </div>)
}

class EditableTimebox extends React.Component {
    state = {
        title: "Uczę się skrótów klawiszowych",
        totalTimeInMinutes: 2,
        isEditable: true
    }

    handleTitle = (e) => {
        const newTitle = e.target.value
        this.setState({
            title: newTitle
        })
    }

    handleTime = (e) => {
        const newTime = e.target.value
        this.setState({
            totalTimeInMinutes: newTime
        })
    }
    onConfirm = () => {
        this.setState({
            isEditable: !this.state.isEditable
        })

    }


    render() {
        const { title, totalTimeInMinutes, isEditable } = this.state
        const { handleTime, handleTitle, onConfirm } = this
        return (
            <>
                <TimeBoxEditor onConfirm={onConfirm} handleTime={handleTime} handleTitle={handleTitle} isEditable={isEditable} title={title} totalTimeInMinutes={totalTimeInMinutes} />
                <CurrentTimeBox title={title} isEditable={isEditable} onConfirm={onConfirm} totalTimeInMinutes={totalTimeInMinutes} />
            </>
        )
    }
}
const TimeBox = ({ title, totalTimeInMinutes, onDelete, onEdit }) => {
    return (
        <div className="time-box">
            <h3> {title} - {totalTimeInMinutes} min.</h3>
            <button onClick={onDelete} > Usuń </button>
            <button onClick={onEdit} > Zmień </button>

        </div>
    )
}

const App = () => {
    return (<div className="root">

        <TimeboxList />
    </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))
