/*
* @Author: shital
* @Date:   2018-01-23 00:19:38
* @Last Modified by:   shital
* @Last Modified time: 2018-01-23 00:46:49
*/
var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("localhost:3000");

describe("Sample Unit Test",()=>{
	it("should return home page",(done)=>{
		server.get('/')
		.expect("Content-type",/text/)
		.expect(200)
		.end((err,res)=>{
			res.status.should.equal(200);
			done();			
		})
	});
})