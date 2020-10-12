import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './pages/HomePage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App container">
        <HomePage/>
      </div>
    );
  }
}

export default App;