import chai from "chai"
import toString from "../src/toString.js"

const expect = chai.expect

describe("Converts `value` to a string", () => {

    it("object is null", () => {
        expect(toString('')).to.equal('');
    });

    it("object is string", () => {
        expect(toString(-0)).to.equal('-0');
    });

    it("object is array", () => {
        expect(toString([1, 2, 3])).to.equal('1,2,3');
    });

    it("object is a symbol", () => {
        expect(toString(',')).to.equal(',');
    });
})