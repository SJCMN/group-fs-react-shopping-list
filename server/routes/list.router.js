const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    console.log('In server GET');
    const queryText = `
        SELECT * FROM list ORDER BY id
    `
    pool.query(queryText)
        .then(response => {
            console.log('response from DB: ', response)
            res.send(response.rows) 
        })
        .catch(err => {
            console.log('Error from DB: ', err);
            res.sendStatus(500)
        })
})



// POST Items
router.post('/', (req, res) => {
    const newItem = req.body;
    console.log('new item is:', newItem);
    

    const sqlText = `INSERT INTO list
    (item, quantity, unit)
     VALUES ($1, $2, $3)`;

    let values = [newItem.item, newItem.quantity, newItem.unit]

    pool.query(sqlText, values)
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
router.delete('/:id', (req, res) => {
        const id = req.params.id;
        const queryText = `DELETE FROM list
            WHERE id = $1;`;

        const values = [id];

        pool.query(queryText, values).then(result => {
            console.log('Item deleted at id:', id);
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
    });

module.exports = router;