import React, { Component } from 'react';
import CardList from './CardList';
import Search from './Search';
import './App.css'
import Scroll from './Scroll';

export class App extends Component {
  constructor() {
    super(); //calls to component class constructor
    this.state = {
      robots: [],
      searchField: ''
    }

    console.log("Constuctor");//1st class constructor grt called
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({ robots: users }));
    console.log("didmount method get called");// class constructor grt called
  }//by using this object get created then(response=>response.json())
  onsearch = (event) => {
    //console.log(event.target.value);
    this.setState({ searchField: event.target.value })
  }
  render() {
    console.log("render method get called ");
    const filteredRobots = this.state.robots.filter(robots => {//searching logic and pasing filteredrobots variable as props tocardlist
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    //console.log(filteredRobots);
    return (
      <div>
        <h1 className='tc'>ROBO FRIENDSs</h1>
        <Search onsearch={this.onsearch} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App
