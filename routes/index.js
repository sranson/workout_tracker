const router = require("express").Router();

const apiRoutes = require("./apiRoutes/apiRoutes.js");
const homeRoutes = require("./homeRoutes.js");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);


module.exports = router;