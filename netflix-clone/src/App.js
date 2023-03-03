import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {login, logout, selectUser} from './features/userSlice'

import './App.css';
import { auth } from './firebase';
import HomeScreen from './layouts/HomeScreen';
import LoginScreen from './layouts/LoginScreen.js';
import ProfileScreen from './layouts/ProfileScreen';

function App() {

    const user =  useSelector(selectUser);
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
    },[]);

    return (
        <div className="app">
            <Router>
                {user ? (
                    <LoginScreen/>
                ) : (
                
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/profile' element={<ProfileScreen />} />

                </Routes>
                )}

            </Router>
        </div>
    );
}

export default App;
