const fs = require('fs');
const path = require('path');
const connection = require('./database/database');
const httpCode = require("../app/utils/httpCodes");
const phoneController = {};


phoneController.getPhones = (req, res) => {
    let sql = 'SELECT * FROM phones';
    connection.query(sql, function (err, phones) {
        if (!err && phones.length > 0) {
            res.status(httpCode.codes.OK).json(phones);
        } else
            res.status(httpCode.codes.NOTFOUND).json('No phones');
    });
}

phoneController.getPhoneById = (req, res) => {
    let id = req.params.id;
    let sql = 'SELECT * FROM phones WHERE id = ?';
    connection.query(sql, [id], function (err, phone) {
        if (!err && phone.length === 1) {
            res.status(httpCode.codes.OK).json(phone);
        } else
            res.status(httpCode.codes.NOTFOUND).json('Phone ' + id + ' not found');
    });
}

phoneController.deletePhoneById = (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE FROM phones WHERE id = ?';
    connection.query(sql, [id], function (err, result) {
        if (!err && result.affectedRows > 0)
            res.status(httpCode.codes.NOCONTENT).json(['Phone ' + id + ' deleted successfully']);
        else
            res.status(httpCode.codes.NOTFOUND).json(['Phone ' + id + ' is not found']);
    });
}

phoneController.postPhone = (req, res) => {
    const {originalname, filename, path} = req.file;
    const phone = {
        name: req.body.phoneName,
        manufacturer: req.body.phoneManufacturer,
        description: req.body.phoneDescription,
        color: req.body.phoneColor,
        price: req.body.phonePrice,
        screen: req.body.phoneScreen,
        processor: req.body.phoneProcessor,
        ram: req.body.phoneRam,
        imageFileName: originalname,
        imageEncryptedFileName: filename,
        imageFilePath: path.split('\\').splice(1).join('\\')
    }

    if (Object.keys(phone).length === 0)
        res.status(httpCode.codes.BADREQUEST).json('No phone information sent');
    else {
        let sql = 'INSERT INTO phones SET ?';
        connection.query(sql, [phone], function (err, result) {
            if (!err) {
                phone.id = result.insertId;
                res.status(httpCode.codes.CREATED).json(phone);
            } else
                res.status(httpCode.codes.SERVERERROR).json('Internal Server Error');
        });
    }
}

phoneController.getImageByFilename = (req, res) => {
    const filename = req.params.filename;
    const readStream = fs.createReadStream(path.join(__dirname, 'uploads', filename));
    readStream.pipe(res);
    readStream.on('error', (err) => {
        res.json(err);
    });
}

phoneController.deleteImageByFilename = (req, res) => {
    const filename = req.params.filename;
    try {
        fs.unlinkSync(path.join(__dirname, 'uploads', filename));
        return res.status(200).json('Successfully! Image has been Deleted');
    } catch (err) {
        // handle the error
        return res.status(400).send(err);
    }

}
module.exports = phoneController;
