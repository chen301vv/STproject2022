import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("Divides two numbers.", () => {
    it("positive number with positive round", () => {
        expect(ceil(1.1234, 2)).to.equal(1.13);
    });

    it("positive number with negative round", () => {
        expect(ceil(6040, -2)).to.equal(6100);
    });

    it("negative float number with positive round", () => {
        expect(ceil(-1.1234, 2)).to.equal(-1.12);
    });

    it("negative number with negative round", () => {
        expect(ceil(-6040, -2)).to.equal(-6000);
    });

    it("positive number with positive round and near 0", () => {
        expect(ceil(0.1475, 2)).to.equal(0.15);
    });

})