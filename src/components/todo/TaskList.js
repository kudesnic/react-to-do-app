import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  getItems(){
    return this.props.tasks.map((item, index) => {
      return <TaskItem key={index} index={index} item={item}/>;
    }
    );
  }

  render() {
    let items = this.getItems();
    return (
        <table className="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Desc</th>
          </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
    );
  }
}