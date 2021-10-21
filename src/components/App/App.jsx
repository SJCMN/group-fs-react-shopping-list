import React from 'react';
import axios from 'axios'
import Header from '../Header/Header.jsx'
import './App.css';
import { useState, useEffect } from 'react';


function App() {

    useEffect(() => {
        fetchList();
    }, [])

    const [shoppingList, setShoppingList] = useState();
    
    const fetchList = () => {
        console.log('in fetchList');
        axios.get('/list')
            .then(response => {
                console.log('Response from axios GET: ', response);
                setShoppingList(response.data)
            })
            .catch(err => {
                console.log('Error on axios GET: ', err);
            })
    }

    console.log('shoppingList:', shoppingList);
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
