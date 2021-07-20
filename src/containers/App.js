import React, { Component } from 'react';
import PersonCardList from '../components/Cards/PersonCardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import '../components/Data/persons.js'
import { persons } from '../components/Data/persons.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      persons: [],
      searchfield: ''
    }
  }

  componentDidMount() {
      this.setState({persons: persons});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { searchfield, persons } = this.state;
    const filteredPersons = persons.filter(person =>{
      return person.firstName.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !persons.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>GacGug Gang</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <PersonCardList persons={filteredPersons} />
        </div>
      );
  }
}

export default App;