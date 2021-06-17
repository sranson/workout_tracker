const router = require("express").Router();
// const { Design, User, Like } = require("../models");

// Route to get 'New Exercise' screen
router.get("/exercise", (req, res) => {
    res.sendFile('exercise.html', { root: 'public'});
})


router.get("/exercise/:id", (req, res) => {
    
})

// Route to get 'Stats screen'
router.get("/stats", (req, res) => {
    res.sendFile('stats.html', { root: 'public'});
})







module.exports = router;