const router = require("express").Router();
const Workout = require("../../models/Workout");
const mongojs = require("mongojs");


const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost/workouts';
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
     db.workouts.insert(  
      {
        day: new Date(new Date().setDate(new Date().getDate())),
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
  // console.log(req.params.id);
  id = mongojs.ObjectId(req.params.id)
  db.workouts.update(
    {
      _id: id
    },
    {
      $push: {"exercises": 
        {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
          distance: req.body.distance
        }
     } 
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
})




// getWorkoutsInRange()
router.get("/workouts/range", (req, res) => {
  // Get all data from backend to populate the charts
  db.workouts.find({}, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });

})




module.exports = router;