const express = require('express');

const router = express.Router();
const phoneController = require("./phoneController");

router.get('/phones', phoneController.getPhones);

module.exports = router;
