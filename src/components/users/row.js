import React, { useReducer } from 'react';

class Row extends React.Component {
  constructor (props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.user.name}</td>
          <td>{this.props.user.email}</td>
        </tr>
      </>
    )
  }
}

export default Row;