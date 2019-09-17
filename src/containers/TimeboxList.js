import React from 'react'
import uuid from 'uuid'
import { TimeBox } from '../components/TimeBox'
import { TimeBoxCreator } from "../components/TimeBoxCreator";
export class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: uuid.v4(), title: "Ucze sie list", totalTimeInMinutes: 25 },
            { id: uuid.v4(), title: "Ucze sie list 2", totalTimeInMinutes: 20 },
            { id: uuid.v4(), title: "Ucze sie list 3", totalTimeInMinutes: 4 },
        ]
    };
    addTimeBox = (timebox) => {
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes };
        });
    };
    handleCreate = (data) => {
        console.log("handleCreate");
        this.addTimeBox(data);
    };
    removeTimeBox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebo, index) => index !== indexToRemove);
            return { timeboxes };
        });
    };
    updateTimebox = (indexToUpdate, updatedTimebox) => {
        console.log("indexToUpdate: ", indexToUpdate, " updatedTimebox: ", updatedTimebox);
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, index) => index === indexToUpdate ? updatedTimebox : timebox);
            return { timeboxes };
        });
    };
    render() {
        return (<>
            <TimeBoxCreator onCreate={this.handleCreate} />

            {this.state.timeboxes.map((timebox, index) => (<TimeBox onDelete={() => this.removeTimeBox(index)} onEdit={() => this.updateTimebox(index, { ...timebox, title: "nowy tytul" })} key={index} title={timebox.title} totalTimeInMinutes={timebox.totalTimeInMinutes} />))}


        </>);
    }
}
