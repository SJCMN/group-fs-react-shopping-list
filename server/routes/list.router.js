const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

//GET

//POST

// POST Items
router.post('/', (req, res) => {
    const newItem = req.body;

    const sqlText = `INSERT INTO list
    (item, quantity, unit)
     VALUES ($1, $2, $3)`;

    let values = [newItem.item, newItem.quantity, newItem.unit]

    pool.query(sqlText, [values])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`POST Error  to database: ${sqlText}`, error);
            res.sendStatus(500);
        });
});


//PUT

//DELETE


module.exports = router;