const express = require("express");
const router = express.Router();
const controller = require("../controllers/coursesController");

router.post("/", controller.createCourse);
router.get("/", controller.listCourses);

module.exports = router;
