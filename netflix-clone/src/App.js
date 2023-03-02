import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {login, logout} from './features/userSlice'

import './App.css';
import { auth } from './firebase';
import HomeScreen from './layouts/HomeScreen';
import LoginScreen from './layouts/LoginScreen.js';

function App() {

    const user = null;
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }));
            } else {
                dispatch(logout)
            };
        })

        return unsubscribe;
    });

    return (
        <div className="app">


            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/login' element={<LoginScreen />} />

                </Routes>

            </Router>
        </div>
    );
}

export default App;
