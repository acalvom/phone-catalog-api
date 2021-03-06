const express = require('express');
const router = express.Router();

const multer = require('multer')
const upload = multer({dest: 'app/uploads/'})
const phoneController = require("./phoneController");

router.get('/phones', phoneController.getPhones);
router.get('/phone/:id', phoneController.getPhoneById);
router.delete('/phone/:id', phoneController.deletePhoneById);
router.post('/add', upload.single('phoneImage'), phoneController.postPhone);
router.get('/uploads/:filename', phoneController.getImageByFilename);
router.get('/phone/uploads/:filename', phoneController.getImageByFilename);
router.delete('/uploads/:filename', phoneController.deleteImageByFilename);


module.exports = router;
