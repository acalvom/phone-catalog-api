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

module.exports = phoneController;
