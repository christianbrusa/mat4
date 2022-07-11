const buildPokemon = require("./ejercicio");
const Promise = require("bluebird")
require("should");


describe("Test", function() {
    this.timeout(6000);
    it("debería armar el pokemon con el formato { pokemon, habilidad }", function() {
        return buildPokemon(25, 9)
        .should.eventually.be.eql({ pokemon: "pikachu", habilidad: "static" });
    });
});