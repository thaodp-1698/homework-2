import React from 'react';

class Detail extends React.Component {
  constructor (props) {
    super();
    this.state = {
      show: false
    };
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.saveUser();
    this.setState({show: false});
  }

  showForm() {
    if (this.props.showForm) {
      return (
        <form>
          <div className="form-detail">
            <div className="form-group">
              <input
                onChange={(e) => {this.props.handleChange(e)}}
                name="name" type="name"
                className="form-control"
                placeholder="Enter name"
                id="name"
                key={this.props.user.id}
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => {this.props.handleChange(e)}}
                name="email" type="text"
                className="form-control"
                placeholder="Enter email"
                id="email"
                key={this.props.user.id}
              />
            </div>
          </div>
          <button type="reset" onClick={(e) => this.props.resetForm()} className="btn btn-danger mr-4">Cancel</button>
          <button
            className="btn btn-primary"
            onClick={(e) => {this.onSubmit(e)}}
          >
            Save
          </button>
        </form>
      )
    } else {
      return (
        <button onClick={(e) => this.props.clickShowForm()} className="btn btn-primary">Add new</button>
      )
    }

  }

  render() {
    return (
      <div className="col-md-6 pt-4">
        <h5>Detail</h5>
        {this.showForm()}
      </div>
    )
  }
}

export default Detail;