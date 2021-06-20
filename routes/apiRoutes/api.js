const router = require("express").Router();
const Workout = require("../../models/Workout");
const mongojs = require("mongojs");

const databaseUrl = "workout";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);
//-----------------   /api/workouts  -------------------

// getLastWorkout()
router.get("/workouts", (req, res) => {
  db.workouts.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});



// createWorkout()   // create a new workout
router.post("/workouts", (req, res) => {
    console.log('Rendering exercise.html');
})


// addExercise()
// router.put("/workouts/:id", ({ body }, res) => {
//   console.log(body);
//   db.workouts.insert(body, (error, data) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data);
//     }
//   });
// })


// getWorkoutsInRange()
router.get("/workouts/range", (req, res) => {

})




module.exports = router;