const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//GET details to details page
router.get('/:id', (req, res) => {
  console.log('Inside get on details.router', req.params.id)
  // const queryText = `SELECT movies.title, array_agg(genres.name) AS genres
  // FROM movies
  // JOIN junction ON junction.movies_id=movies.id
  // JOIN genres ON junction.genres_id=genres.id WHERE movies.id=$1
  // GROUP BY movies.title`
  const queryText = `SELECT * FROM movies where id=$1 ` 
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/details", error);
      res.sendStatus(500);
    });
});


module.exports = router;