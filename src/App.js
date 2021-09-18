import React from 'react'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import RegisterForm from './components/Dashboard/Admins/RegisterForm';
import Complains from './components/Dashboard/Complains/Complains';
import Orders from './components/Dashboard/Orders/Orders';
import AddAdmin from './components/Dashboard/Admins/AddAdmin';
import Reports from './components/Dashboard/Reports/Reports';
import Profile from './components/Dashboard/Users/Users';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/orders">
        <Orders/>
      </Route>
      <Route path="/add">
        <AddAdmin />
      </Route>
      <Route path="/reports">
        <Reports />
      </Route>
      <Route path="/complains">
        <Complains />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Router>
  );
}

export default App;
