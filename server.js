const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const databaseUrl = "workout";
// const collections = ["workouts"];

// const db = mongojs(databaseUrl, collections);

app.use(express.static("public"));


// db.create({ name: "Workout" })
//   .then(dbWorkouts => {
//     console.log(dbWorkouts);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

// routes
app.use(require("./routes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
