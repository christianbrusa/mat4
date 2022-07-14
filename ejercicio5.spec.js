const getPokemonFromArray = require("./ejercicio");
const Promise = require("bluebird")
require("should");

describe("Test", () => {
    describe("pasando un Array", function() {
        this.timeout(6000)
        it("con ['gyarados', 'pikachu', 'charizard'] debería devolver ['charizard', 'gyarados']", () => {
            return getPokemonFromArray(['pikachu', 'charizard', 'gyarados'])
            .should.eventually.be.eql(['charizard', 'gyarados']);
        })

        it("con [] debería devolver []", () => {
            return getPokemonFromArray([])
            .should.eventually.be.eql([]);
        })
    });

    describe("pasando una Promise", function() {
        this.timeout(6000)
        it("con ['mew', 'rayquaza', 'celebi', 'arceus'] debería devolver ['arceus', 'rayquaza']", () => {
            return getPokemonFromArray(Promise.resolve(['mew', 'rayquaza', 'celebi', 'arceus']))
            .should.eventually.be.eql(['rayquaza', 'arceus']);
        })

        it("con ['nidorina', 'porygon', 'mightyena'] debería devolver []", () => {
            return getPokemonFromArray(Promise.resolve(['nidorina', 'porygon', 'mightyena']))
            .should.eventually.be.eql([]);
        })

        it("con [] debería devolver []", () => {
            return getPokemonFromArray(Promise.resolve([]))
            .should.eventually.be.eql([]);
        })
    });
});