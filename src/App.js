import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup'
import ContactMe from './components/pages/ContactMe';
import CreateTodo from './components/createtodo/CreateTodo';
import UpdateTodo from './components/updatetodo/UpdateTodo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact-me' exact component={ContactMe}/>
        <Route path='/sign-up' exact component={Signup} />
        <Route path='/create-Todo' exact component={CreateTodo} />
        <Route path='/update-Todo' exact component={UpdateTodo} />
      </Switch>
    </Router>
  );
}

export default App;
