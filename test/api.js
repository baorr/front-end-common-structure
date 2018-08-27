var http = require('http')
var assert = require('assert')
var superagent = require('superagent');
 

describe("API",function () {
 it("Invite Case",function (next) {
 	this.timeout(10000);
 	superagent.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth').send({ name: 'Manny', email: 'cat@34.com' }).then(res => {
      assert.deepEqual(res.status, 200);
      next();
    });
 })
});