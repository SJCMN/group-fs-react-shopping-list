const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

//GET

//POST

//PUT

//DELETE
router.delete('/:id')
    .then((req, res) => {
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
        })

    }).catch(err => {
        console.log('DELETE ERR', err);
        res.sendStatus(500);
    })

module.exports = router;