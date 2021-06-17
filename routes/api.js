const router = require("express").Router();
const workout = require("../models")

// New Exercise route
// Render exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile('exercise.html', { root: 'public'});
})






module.exports = router;