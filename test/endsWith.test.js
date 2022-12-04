import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("Arrays of endsWith.", () => {
    it("ends with target", () => {
        expect(endsWith('abc', 'c')).to.equal(true);
    });

    it("not ends with target", () => {
        expect(endsWith('abc', 'a')).to.equal(false);
    });

    it("ends with a number assigned", () => {
        expect(endsWith('abc', 'a', 1)).to.equal(true);
    });

    it("does not end with a number assigned", () => {
        expect(endsWith('abc', 'b', 1)).to.equal(false);
    });

    it("empty array", () => {
        expect(endsWith('', '')).to.equal(true);
    });
    
})
