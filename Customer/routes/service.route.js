const express = require("express");
const router = express.Router();

const serviceController = require("../controllers/service.controller.js");

router.get("/", serviceController.show);
router.get("/:id_service", serviceController.ServiceDetail);

module.exports = router