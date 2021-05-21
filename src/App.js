// import "./App.css";
// import Registration from "./Registration";

// function App() {
//   return (
//     <div className="App">
//       <Registration />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import logo from './logo.svg'
import logo from './downloads.jpg'

import Login from "./login";
import SignUp from "./Registration";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
        <div className="container">
        <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> {'  '}
          <Link className="navbar-brand" to={""}>  BANK</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} >Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
     
    </div>
     </Router>
  );
}

export default App;