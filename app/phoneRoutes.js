const express = require('express');

const router = express.Router();
const phoneController = require("./phoneController");

router.get('/phones', phoneController.getPhones);
router.get('/phone/:id', phoneController.getPhoneById);

module.exports = router;
