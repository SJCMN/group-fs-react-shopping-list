import React from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';
import { useState, useEffect } from 'react';


function App() {

    useEffect(() => {
        fetchList();
    }, [])
    
    const fetchList = () => {
        console.log('in fetchList');
        axios.get('/list')
            .then()
            .catch()
    }


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
