const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

//GET details to details page
router.get('/:id', (req, res) => {
  const queryText = `SELECT movies_id, movies.title, array_agg(genres.name) AS genres
  FROM movies
  JOIN junction ON junction.movies_id=movies.id
  JOIN genres ON junction.genres_id=genres.id WHERE movies.id=$1
  GROUP BY movies_id, movies.title ;`
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

//used to update details for selected movie (that is, title and description)
router.put('/', (req, res) => {
  console.log('inside details router', req.body)
  const updatedMovie = req.body;

  const queryText = `UPDATE movies
  SET "title" = $1, 
  "description" = $2
  WHERE id=$3 `;

  const queryValues = [
    updatedMovie.title,
    updatedMovie.description,
    updatedMovie.id
  ];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing UPDATE', err);
      res.sendStatus(500);
    });
});


module.exports = router;