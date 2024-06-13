const express = require('express');
const userController = require('../controllers/User');

const router = express.Router();

router.post("/register", userController.registerUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);

module.exports = router;