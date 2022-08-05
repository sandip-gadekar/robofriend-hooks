import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import Search from './Search';
import './App.css'
import Scroll from './Scroll';

function App() {
  // constructor() {
  //   super(); //calls to component class constructor
  //   this.state = {
  //     robots: [],
  //     searchField: ''
  //   }
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('');

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({ robots: users }));
  //   console.log("didmount method get called");// class constructor grt called
  // }//by using this object get created then(response=>response.json())
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
  })
  const onsearch = (event) => {
    setSearchField(event.target.value)
  }
  //console.log(searchField);
  const filteredRobots = robots.filter(robots => {//searching logic and pasing filteredrobots variable as props to cardlist
    return robots.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div>
      <h1 className='tc'>ROBO FRIENDS</h1>
      <Search onsearch={onsearch} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}


export default App
