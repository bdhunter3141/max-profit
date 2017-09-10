var assert = require("chai").assert
var check = require("../index.js")


describe("Max Profit", function() {
  it("Should return the highest possible profit from an array of stock information", function() {
    var array = [45, 24, 35, 31, 40, 38, 11]
    assert.strictEqual(check(array), 16, 'these numbers are strictly equal')
  })
  it("Should return '-1' value if no possible profit", function() {
    var array = [45, 24, 33, 31, 29, 24, 11]
    assert.strictEqual(check(array), -1, 'these numbers are strictly equal')
  })
})