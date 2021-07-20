import React, { Component } from 'react';
import PersonCardList from '../components/Cards/PersonCardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import '../components/Data/persons.js'
import { tiles } from '../components/Data/tiles';
import TileCardList from '../components/Cards/TileCardList';

class MainMenu extends Component {
  constructor() {
    super()
    this.state = {
      tiles: []
    }
  }

  componentDidMount() {
      this.setState({tiles: tiles});
  }

  clickEvent = () => {
    alert("hello world");
  }

  render() {
    const { tiles } = this.state;
    return !tiles.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Main Menu</h1>
          <TileCardList tileCards={tiles} clickEvent={this.clickEvent} />
        </div>
      );
  }
}

export default MainMenu;