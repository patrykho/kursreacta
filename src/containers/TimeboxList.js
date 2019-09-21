import React from 'react'
import uuid from 'uuid'
import { TimeBox } from '../components/TimeBox'
import { TimeBoxCreator } from "../components/TimeBoxCreator";
import { Modal } from '../components/Modal'
import { ErrorBoundary } from './ErrorBoundary';

export class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: uuid.v4(), title: "Ucze sie list", totalTimeInMinutes: 25 },
            { id: uuid.v4(), title: "Ucze sie list 2", totalTimeInMinutes: 20 },
            { id: uuid.v4(), title: "Ucze sie list 3", totalTimeInMinutes: 4 },
        ],
        editing: false,
        dataToUpdate: {

        }
    };

    toggleModal = () => {
        console.log("toggleModal")
        this.setState({
            editing: false
        })

    }

    addTimeBox = (timebox) => {
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes };
        });
    };
    handleCreate = (data) => {

        this.addTimeBox(data);
    };
    removeTimeBox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebo, index) => index !== indexToRemove);
            return { timeboxes };
        });
    };
    updateTimebox = (indexToUpdate, title, time) => {

        this.setState({
            editing: true,
            dataToUpdate: { indexToUpdate, title, time }
        })
        const dataToUpdare = {
            id: indexToUpdate,
            title,
            totalTimeInMinutes: time,

        }
        console.log("indexToUpdate: ", indexToUpdate, " title: ", title, " time ", time);
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, index) => index === indexToUpdate ? dataToUpdare : timebox);
            return { timeboxes };
        });
    };
    render() {
        const { editing, dataToUpdate } = this.state
        return (<>
            <TimeBoxCreator onCreate={this.handleCreate} />
            <ErrorBoundary message={"Wystąpił błąd"}>
                {editing ? (<Modal updateTimebox={this.updateTimebox} toggleModal={this.toggleModal} dataToUpdate={dataToUpdate} />) : ("")}
                {this.state.timeboxes.map((timebox, index) => (<TimeBox onDelete={() => this.removeTimeBox(index)}
                    onEdit={() => this.updateTimebox(index, timebox.title, timebox.totalTimeInMinutes)}
                    key={index} title={timebox.title} totalTimeInMinutes={timebox.totalTimeInMinutes} />))}

            </ErrorBoundary>

        </>);
    }
}
