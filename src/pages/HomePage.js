import React from 'react';

import Header from '../components/header/header';
import Detail from '../components/users/detail';
import List from '../components/users/list';
import './page.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      timer: Date.now(),
      showForm: false,
      user: {},
      name: '',
      email: '',
    }
  }

  componentDidMount() {
    this.getListUser();
  }

  getListUser = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    this.setState({users: users});
  }

  showForm () {
    this.setState({
      showForm: true
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  resetForm () {
    this.setState({
      name: '',
      email: '',
      showForm: false
    });
  }

  saveUser () {
    if (this.state.name && this.state.email) {
      let users = this.state.users;
      users.push({
        name: this.state.name,
        email: this.state.email
      })
      debugger;
      localStorage.setItem('users', JSON.stringify(users));
      this.getListUser();
      this.resetForm();
    }
  }

  render() {
    return (
      <>
        <Header timer={this.state.timer}/>
        <div className="row body">
          <List
            users={this.state.users}
          />
          <Detail
            name={this.state.name}
            email={this.state.email}
            user={this.state.user}
            showForm={this.state.showForm}
            clickShowForm={(e) => this.showForm()}
            resetForm={() => this.resetForm()}
            saveUser={() => this.saveUser()}
            handleChange={(e) => this.handleChange(e)}
          />
        </div>
      </>
    );
  }
}

export default HomePage;