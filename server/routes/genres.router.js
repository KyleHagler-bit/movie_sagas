const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//gets all genres from genres table in database
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "genres" ORDER BY id;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/genres", error);
      res.sendStatus(500);
    });
});


module.exports = router;