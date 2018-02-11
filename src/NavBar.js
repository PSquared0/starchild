import React, {Component} from 'react';
import './NavBar.css';
import Parent from './Parent.js';
import App from './App.js';
import {BrowserRouter as Router, Link, Route, Switch, HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

class NavBar extends Component {
  render() {
    return (
      <div><Router>
        <div className="Navbar">
          <div className="NavbarLeft">
            <h1>
              Starchild
            </h1>
          </div>
          <div className="NavbarRight">

              <Link className="navigation-link" to='/kid'><h4>PARENT</h4></Link>

            <h4 Link="Link" to='/kid'>
              CHILDREN
            </h4>
            <h4 Link="Link" to='/rewards'>
              REWARDS
            </h4>
            <h4 Link="Link" to='/goal'>
              GOALS
            </h4>

          </div>
        </div>


          <div>
            <Route exact path="/" component={App}/>
        </div>

    </Router>
  </div>
);
  }
}
ReactDOM.render(<Router>

</Router>, document.getElementById('root'));

export default NavBar;
