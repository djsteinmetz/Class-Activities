var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("Calculate Tax", function () {
    it("should return the total after tax of 16", function () {
        let result = calculateTax(16);
        expect(result).to.equal(17.28);
    });
    it("should return the total after tax of 9", function () {
        let result = calculateTax(9);
        expect(result).to.equal(9.72);
    });
    it("should return the total after tax of 1299", function () {
        let result = calculateTax(1299);
        expect(result).to.equal(1402.92);
    });
});