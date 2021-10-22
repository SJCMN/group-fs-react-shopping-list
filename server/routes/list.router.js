const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO - Add routes here...
router.get("/", (req, res) => {
  console.log("In server GET");
  const queryText = `
        SELECT * FROM list ORDER BY id
    `;
  pool
    .query(queryText)
    .then((response) => {
      console.log("response from DB: ", response);
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("Error from DB: ", err);
      res.sendStatus(500);
    });
});

// POST Items
router.post("/", (req, res) => {
  const newItem = req.body;
  console.log("new item is:", newItem);

  if (!newItem.item || !newItem.quantity) {
    res.sendStatus(400);
  } else if (newItem.item !== "" && newItem.quantity !== "") {
    const sqlText = `INSERT INTO list
    (item, quantity, unit)
     VALUES ($1, $2, $3)`;

    let values = [newItem.item, newItem.quantity, newItem.unit];

    pool
      .query(sqlText, values)
      .then((response) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`POST Error  to database: ${sqlText}`, error);
        res.sendStatus(500);
      });
  }
});

//PUT
router.put("/:id", function (req, res) {
  let id = req.params.id;
  let queryText = ``;
  let values;
  if (id !== "0") {
    queryText = `UPDATE "list" SET "ispurchased" = TRUE WHERE "id" = $1;`;
    values = [id];
  } else if (id === "0") {
    queryText = `UPDATE "list" SET "ispurchased" = FALSE;`;
  }

  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

//DELETE
// the ? makes the param optional, so we can test if it's undefined
router.delete("/:id?", (req, res) => {
  console.log("DELETE accessed");
  const id = req.params.id;
  let queryText, values;

  if (id) {
    //delete single item if id
    queryText = `DELETE FROM list
                WHERE id = $1;`;
    values = [id];

    pool
      .query(queryText, values)
      .then((result) => {
        console.log("Item deleted at id:", id);
        res.sendStatus(204);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  } else {
    //Clear all items if no id
    queryText = "DELETE FROM list;";

    pool
      .query(queryText)
      .then((result) => {
        console.log("List Cleared");
        res.sendStatus(204);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
});

module.exports = router;
