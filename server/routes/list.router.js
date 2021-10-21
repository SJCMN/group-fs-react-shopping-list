const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// TODO - Add routes here...

//GET

//POST

//PUT
router.put("/:id", function (req, res) {
  let id = req.params.id;
  let queryText = ``;
  if (id !== "all") {
    queryText = `UPDATE "list" SET "ispurchased" = TRUE WHERE "id" = $1;`;
  } else if (id === "all") {
    queryText = `UPDATE "list" SET "ispurchased" = FALSE WHERE "ispurchased" = TRUE;`;
  }
  let values = [id];
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

module.exports = router;
