const expect = require('chai').expect;
const request = require('request');
require('../index');

const BASE_URL = 'http://localhost:8000';

it('Main page content', function (done) {
    request(BASE_URL, function (error, response, body) {
        expect(body).to.equal('index.js');
        done();
    });
});

it('Main page status', function (done) {
    request(BASE_URL, function (error, response) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('About page content', function (done) {
    request(BASE_URL + '/about', function (error, response) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});
