import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Claims from './claims/Claims';
import Policies from './policies/Policies';
import AboutUs from './aboutUs/AboutUs';
import Navigation from './common/Navigation';
import CreatePolicy from './policies/CreatePolicy';
import AddClaim from './claims/AddClaim';
import Todos from './todos';
import AddTodo from './todos/AddTodo'

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/claims" component={Claims} />
          <Route path="/claims/new" component={AddClaim} />
          <Route exact path="/policies" component={Policies} />
          <Route path="/policies/new" component={CreatePolicy} />
          <Route exact path="/todos" component={Todos} />
          <Route path="/todos/new" component={AddTodo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
