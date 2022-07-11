/*
 * Ahora, también como la semana pasada, te pedimos que rechaces una Promise
 * con un error que tenga como mensaje "Hola mundo!".
 * Acordate de hacerlo con bluebird.
 *
 */
const Promise = require("bluebird");

function helloWorldAsync() {
	return Promise.reject(new Error("Hola mundo!"));
}

module.exports = helloWorldAsync;
