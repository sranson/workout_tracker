const path = require("path");
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000
const app = express();


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
