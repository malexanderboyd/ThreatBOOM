var FeedUtils = require('../FeedUtils')
const request = require('supertest');
const express = require('express');
var app = require('../app');
var chai = require('chai');
var assert = chai.assert;
describe('FeedUtils Test', function() {


  it('it should return top ten from category on findTopTen()', function(done) {
    feedData = [
      [null, null, null, null, null, null, null, null, null, "Spooky"],
      [null, null, null, null, null, null, null, null, null, "Spooky2"],
      [null, null, null, null, null, null, null, null, null, "Spooky3"],
      [null, null, null, null, null, null, null, null, null, "Spooky4"],
      [null, null, null, null, null, null, null, null, null, "Spooky5"],
      [null, null, null, null, null, null, null, null, null, "Spooky6"],
      [null, null, null, null, null, null, null, null, null, "Spooky7"],
      [null, null, null, null, null, null, null, null, null, "Spooky8"],
      [null, null, null, null, null, null, null, null, null, "Spooky9"],
      [null, null, null, null, null, null, null, null, null, "Spooky10"],
      [null, null, null, null, null, null, null, null, null, "Spooky11"],
      [null, null, null, null, null, null, null, null, null, "Spooky12"]
    ]
      let utilData = FeedUtils.findTopTen(FeedUtils.COUNTRY, feedData)
      assert.equal(utilData.length, 10)
      done()
  });

    it('it should return undefined on findTopTen() with no data', function(done) {
    feedData = [
      [null, null, null, null, null, null, null, null, null, "Spooky"],
      [null, null, null, null, null, null, null, null, null, "Spooky2"],
      [null, null, null, null, null, null, null, null, null, "Spooky3"],
      [null, null, null, null, null, null, null, null, null, "Spooky4"],
      [null, null, null, null, null, null, null, null, null, "Spooky5"],
      [null, null, null, null, null, null, null, null, null, "Spooky6"],
      [null, null, null, null, null, null, null, null, null, "Spooky7"],
      [null, null, null, null, null, null, null, null, null, "Spooky8"],
      [null, null, null, null, null, null, null, null, null, "Spooky9"],
      [null, null, null, null, null, null, null, null, null, "Spooky10"],
      [null, null, null, null, null, null, null, null, null, "Spooky11"],
      [null, null, null, null, null, null, null, null, null, "Spooky12"]
    ]
      let utilData = FeedUtils.findTopTen(FeedUtils.COUNTRY, undefined)
      assert.equal(utilData, undefined)
      done()
  });

      it('it should return json data on toJson() with data', function(done) {
    feedData = [
      ["Ghost", "Goblin", "Ghoul", "Zomibe", "Frankenstein", "Casper", "Haunted", "Witch", "Demon", "Spooky"],
    ]
      let utilData = FeedUtils.toJson(feedData)
      assert.typeOf(utilData, 'array');
      assert.property(utilData[0], "first_seen")
      assert.property(utilData[0], "threat")
      assert.property(utilData[0], "malware")
      done()
  });
});