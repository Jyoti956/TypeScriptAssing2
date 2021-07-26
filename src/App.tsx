import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Company from './components/company/Company';
import Customer from './components/customer/Customer';
import Admin from './components/admin/Admin';
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/company" exact component={Company} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/*" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
