import React from 'react';
import './header.css'

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      timer: null,
      timeLoad: 0,
    }
  }

  componentDidMount () {
    this.timeLoad();
  }

  timeLoad () {
    this.setState({
      timeLoad: (Date.now() - this.props.timer),
    });
  }

  render() {
    return (
      <div className="header row">
        <div className="header-info col-md-6 text-left pl-4">
          Header
        </div>
        <div className="header-info col-md-6 text-right">
          {this.state.timeLoad}
        </div>
      </div>
    );
  }
}

export default Header;