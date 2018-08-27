var http = require('http')
var assert = require('assert')
var superagent = require('superagent');
 

describe("Home Page",function () {
 it("get homepage well",function (next) {
 superagent.get('http://localhost:3000/').end(function(err, res){
	  assert.deepEqual(res.status, 200)
	  next();
  });
 })
});