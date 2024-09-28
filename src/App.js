import React from 'react'
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
