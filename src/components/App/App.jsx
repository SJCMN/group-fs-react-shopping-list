import React from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';
import { useState, useEffect } from 'react';




// POST ROUTE item quantity unit

const addItem = (newItem) => {
    console.log(newItem);
    // POST your data here

    axios({
        method: 'POST',
        url: '/list',
        data: newItem
    })
    .then((response) => {
        console.log('Response is', response);
        getItems();
        })
        .catch((error) => {
        console.log('Error on POST', error);
        })
}

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
