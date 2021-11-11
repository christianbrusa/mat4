const helloWorldAsync = require("./ejercicio1");
require("should");

describe("Test", () => {
    describe("helloWorldAsync", () => {
        it("debería resolver al string 'Hola mundo!'", () => {
            return helloWorldAsync().should.eventually.eql("Hola mundo!");
        })
    });
});