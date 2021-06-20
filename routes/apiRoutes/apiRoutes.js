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
router.post("/workouts", ({ body }, res) => {
    db.workouts.insert(  
      {
        day: new Date(new Date().setDate(new Date().getDate())),
        exercises: [ body ],
    }, 
      (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
})

// addExercise()
router.put("/workouts/:id", (req, res) => {
  targetWorkout = db.workouts.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log(data);
        // db.workouts.update({targetWorkout}, {$set: {"exercises": [req.body]}})   // OLD VERSION
        db.workouts.update({targetWorkout}, {$push:{ "exercises": req.body}})   // LATEST VERSION
      }
    }
  );
})




// // addExercise()
router.put("/workouts/:id", ({ body }, res) => {
  // console.log(body);
  db.workouts.insert(  
    {
      day: new Date(new Date().setDate(new Date().getDate())),
      exercises: [ body ],
  }, 
    (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
})


// getWorkoutsInRange()
router.get("/workouts/range", (req, res) => {

})




module.exports = router;