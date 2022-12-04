import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("Adds two numbers.", () => {

    it("values are positive integers", () => {
        expect(add(3, 2)).to.equal(5);
    });

    it("values are negative integers", () => {
        expect(add(-3, -2)).to.equal(-5);
    });
    it("add positive and negative integer", () => {
        expect(add(-3, 4)).to.equal(1);
    });

    it("values cannot use datatype as float", () => {
        expect(add(3.1, 2.2)).to.not.equal(5.3);
    });

})