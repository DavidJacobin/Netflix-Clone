import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './App.css';
import HomeScreen from './layouts/HomeScreen';
import LoginScreen from './layouts/LoginScreen.js';

function App() {
  
  return (
    <div className="app">


      <Router>
        <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
