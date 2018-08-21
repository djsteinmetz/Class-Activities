var should = require("chai").should();
var disemvowel = require("../disemvowel");

describe("Disemvowel", () => {
    it("The disemvowel function should return a string without vowels", () => {
        disemvowel("This lowercase").should.equal("Ths lwrcs");
    })
});