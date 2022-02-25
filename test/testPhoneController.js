const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const mocha = require('mocha');
const describe = mocha.describe;

const httpCode = require('../app/utils/httpCodes');
const BASE_URL = 'http://localhost:8000';

chai.use(chaiHttp);

describe('Testing Phone Controller', function () {

    describe('Get Phones', function () {
        it('should return an array of phones', function (done) {
            chai.request(BASE_URL)
                .get("/phones")
                .end(function (err, res) {
                    expect(res).to.have.status(httpCode.codes.OK);
                    expect(res.body).to.be.a('array');
                    expect(res.body).to.have.lengthOf.at.least(1);
                    done();
                })
        });
    });
})
