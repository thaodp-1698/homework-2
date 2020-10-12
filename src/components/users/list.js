import React from 'react';
import {Col, Table} from 'react-bootstrap';
import Row from './row';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className="col-md-6 body-info pt-4">
        <h5>List</h5>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{
              this.props.users.map((user) => (
                <Row
                  key={user.id}
                  user={user}
                />
              ))
            }</tbody>
          </Table>
        </Col>
      </div>
    )
  }
}

export default List;