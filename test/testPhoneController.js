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

    describe('Get Phone By ID', function () {
        it('should return OK with a single phone', function (done) {
            chai.request(BASE_URL)
                .get("/phone/1")
                .end(function (err, res) {
                    expect(res).to.have.status(httpCode.codes.OK);
                    expect(res.body).to.be.a('array');
                    expect(res.body[0]).to.have.property('id').to.be.equal(1);
                    expect(res.body[0].name).not.be.null;
                    expect(res.body[0].price).not.be.null;
                    done();
                })
        });

        it('should return NOT FOUND because the phone does not exist', function (done) {
            chai.request(BASE_URL)
                .get("/phone/0")
                .end(function (err, res) {
                    expect(res).to.have.status(httpCode.codes.NOTFOUND);
                    done();
                })
        });
    });
})
