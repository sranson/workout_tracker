const router = require("express").Router();
const Workout = require("../../models/Workout");




router.get("/workouts", (req, res) => {
    Workout.find({})
      .then(workoutData => {
        res.json(workoutData);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });




router.post("/workouts", (req, res) => {
    console.log('Happy?');
})




router.get("/workouts/range", (req, res) => {

})

router.put("/workouts/:id", (req, res) => {
  
})

module.exports = router;