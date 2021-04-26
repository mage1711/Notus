import express from "express";
import db from "../services/Database";
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default router;
