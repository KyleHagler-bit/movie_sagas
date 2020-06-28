const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//GET movies to DOM
router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "movies" ORDER BY id;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/movies", error);
      res.sendStatus(500);
    });
});


module.exports = router;