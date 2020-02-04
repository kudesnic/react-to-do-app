import React from 'react';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    onTextChange(e){
        this.props.onTextChange(e);
    }

    onAddTask(e){
        this.props.onAddTask(e);
    }


    render() {
        return (
            <div>
              <input type="text"  onChange={this.onTextChange} value={this.props.newTask.text}/>
              <button onClick={this.onAddTask}>Add Task</button>
            </div>
        );
    }
}