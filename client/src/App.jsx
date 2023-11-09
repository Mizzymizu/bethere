import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;