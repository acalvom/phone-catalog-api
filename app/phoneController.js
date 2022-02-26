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
    let phone = req.body;
    console.log(phone)
    res.json(phone)
}

module.exports = phoneController;
