import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './App.css';
import HomeScreen from './layouts/HomeScreen';

function App() {
  return (
    <div className="app">

      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />}>
    
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
