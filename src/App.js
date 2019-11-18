import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  console.log(process.env)
  console.log('hola')
  return (
    <div className="App">
        <Link to ="/about" > about </Link>
        <Link to ="/home" > home </Link>
        actualizado 3.13
        <Route path ="/about" component ={About}/>
        <Route path = "/home" component = {Home} />
    </div>
  );
}

export default App;
