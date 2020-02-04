import React from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask : {
                text: '',
                isFinished: false,
            },
            tasks : []
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
    }

    onTextChange(e){
        this.setState({
            newTask:{
                text: e.target.value
            }
        });

        console.log(this.state.newTask);
    }

    onAddTask(e){
        console.log(this.state);

        this.setState(prevState => {

            prevState.tasks.push(this.state.newTask);

            return {
                tasks: prevState.tasks
            }
        }
        );
        console.log(this.state.tasks);
    }


  render() {
    return (
        <div>
          <AddTask newTask={this.state.newTask} tasks={this.state.tasks} onAddTask={this.onAddTask} onTextChange={this.onTextChange}/>
          <TaskList tasks={this.state.tasks}/>
        </div>
    );
  }
}