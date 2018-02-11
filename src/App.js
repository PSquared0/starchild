import React, {Component} from 'react';
import './App.css';
// import  NavBar  from './NavBar.js';
import ReactDOM from 'react-dom';
import Parent from './Parent.js';
import Reward from './Reward.js';
import Kid from './Kid.js';
import Goals from './Goals.js';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
//
// class App extends Component {
//   render() {
//     return (
//       <div>
//   <NavBar />
//         <h1 className="Title">Starchild</h1>
//         </div>
//     );
//
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
      <h1 className="Title">Starchild</h1>
      <Router>
        <div className="Container">
          <nav>
            <Link to="/">Starchild</Link>
            <Link to="/parent">PARENT</Link>
            <Link to="/kid">CHILDREN</Link>
            <Link to="/reward">REWARD</Link>
            <Link to="/goals">GOALS</Link>
          </nav>
          <Switch>
            <Route exact="exact" path="/" component={App}/>
            <Route path="/parent" component={Parent}/>
            <Route path="/kid" component={Kid}/>
            <Route path="/reward" component={Reward}/>
            <Route path="/goals" component={Goals}/>
          </Switch>
        </div>
      </Router>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
