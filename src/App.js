import './App.css';
import Navbar from './Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{
  state={
    users: [
      {id: 0 , firstName: 'Somya', lastName: 'Gupta', email: 'somyagupta@gmail.com', phoneNumber: 9876543210, password: '123abcDEF'}
    ]
  }

  
  render() {

    return(
      <Router>
        <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/Signin">
              <Signin />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
          </Switch>
        </div>
        </div>
      </Router>
    )
  }
}

export default App;
