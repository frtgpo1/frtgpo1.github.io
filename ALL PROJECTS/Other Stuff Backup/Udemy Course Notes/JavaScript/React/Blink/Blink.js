import React, { Component } from 'react';
import './Blink.css';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    this.state.text = {};
    if (this.props.texts === null || this.props.texts === undefined || Object.keys(this.props.texts).length === 0)
    {
      this.state.text.slim = "slim";
      this.state.text.shady = "shady";
    }

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.state.text.slim : this.state.text.shady;
    return (
      <p>Hi, my name is {display}</p>
    );
  }
}

export default Blink;
