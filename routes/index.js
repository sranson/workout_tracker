const router = require("express").Router();

const apiRoutes = require("./apiRoutes/apiRoutes");
const homeRoutes = require("./homeRoutes");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);


module.exports = router;