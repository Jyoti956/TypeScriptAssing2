import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/loginpage/LoginPage';
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
        <Route path="/*" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
