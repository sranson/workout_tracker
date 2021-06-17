const router = require("express").Router();
const workout = require("../models")

// Route to get 'New Exercise' screen
router.get("/exercise", (req, res) => {
    res.sendFile('exercise.html', { root: 'public'});
})


// Route to get 'Stats screen'
router.get("/stats", (req, res) => {
    res.sendFile('stats.html', { root: 'public'});
})





module.exports = router;