const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));

/** ---------- ROUTES ---------- **/
const movieRouter = require("./routes/movies.router.js");
app.use("/api/movies", movieRouter);

const detailsRouter=require ("./routes/details.router.js")
app.use("/api/details", detailsRouter)

const genresRouter=require ("./routes/genres.router.js")
app.use("/api/genres", genresRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});