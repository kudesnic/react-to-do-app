import React from 'react';

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <tr>
            <th scope="row">{this.props.index + 1}</th>
            <td>{this.props.item.text}</td>
            <td>
                <input type="checkbox" name="isFinished" value="Finished"/>
            </td>
        </tr>
    );
  }
}