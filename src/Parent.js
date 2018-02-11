import React, {Component} from 'react';
import './Parent.css';
// import NavBar from './NavBar.js';

export default class Parent extends Component {
  render() {
    return (<div>
      <Parent />
      {/* <NavBar/> */}
    <h1 className="Title">pascale</h1>
    </div>);

  }
}
