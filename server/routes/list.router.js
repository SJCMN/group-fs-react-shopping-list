const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    console.log('In server GET');
    const queryText = `
        SELECT & FROM list ORDER BY 
    `
    pool.query(queryText)
        .then(response => {
            console.log('response from DB: ', response) 
        })
        .catch(err => {
            console.log('Error from DB: ', err);
            res.sendStatus(500)
        })
})

module.exports = router;