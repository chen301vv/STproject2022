import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect
const assert = chai.assert

describe("Divides two numbers.", () => {
    it("Bug: values are positive integers and divisible", () => {
        expect(divide(8, 2)).to.not.equal(4);
    });

    it("Bug: values are positive integers and the not divisible", () => {
        expect(divide(3, 2)).to.not.equal(1.5);
    });

    it("Bug: positive integer divides with negative integer", () => {
        expect(divide(4, -2)).to.not.equal(-2);
    });

    it("Bug:0 divides with a positive integer", () => {
        expect(divide(0, 2)).to.not.equal(0);
    });

    it("a positive integer divides with 0", () => {
        assert.equal(isNaN(divide(2, 0)), true);
    });
})