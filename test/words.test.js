import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

describe("Divides two numbers.", () => {
    it("an array of words with alphanumeric characters", () => {
        expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it("an array of words without alphanumeric characters", () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

})
