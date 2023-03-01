import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import './App.css';
import { auth } from './firebase';
import HomeScreen from './layouts/HomeScreen';
import LoginScreen from './layouts/LoginScreen.js';

function App() {

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){

      }else{

      };
    })

    return unsubscribe;
  });
  
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
