import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';




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
