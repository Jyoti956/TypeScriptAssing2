import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Login from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Company from './components/company/Company';
import Customer from './components/customer/Customer'
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Login/>
        <Company/>
      </BrowserRouter>
    </div>
  );
}

export default App;
