import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Login from './components/login/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Login/>
      </BrowserRouter>
    </div>
  );
}

export default App;
