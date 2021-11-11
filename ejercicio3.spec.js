const buildTeamObject = require("./ejercicio3");
const fixture = require("./fixture3");
require("should");

const result = [fixture.greninja, fixture.quagsire]

describe("Test", function() {
    this.timeout(6000)
    it("debería armar los pokemon a usar en la pelea", () => {
        return buildTeamObject('greninja', 'quagsire')
        .should.eventually.be.eql(result);
    });
});