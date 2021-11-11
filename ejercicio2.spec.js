const helloWorldAsync = require("./ejercicio2");
require("should");

describe("Test", () => {
    describe("helloWorldAsync", () => {
        it("debería resolver al string 'Hola mundo!'", () => {
            return helloWorldAsync().should.be.rejectedWith("Hola mundo!");
        })
    });
});