const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


db.Workout.create({ name: "Workout" })
  .then(dbWorkouts => {
    console.log(dbWorkouts);
  })
  .catch(({message}) => {
    console.log(message);
  });

// routes
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
