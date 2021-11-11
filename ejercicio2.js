/*
 * Ahora, también como la semana pasada, te pedimos que rechaces una Promise
 * con un error que tenga como mensaje "Hola mundo!".
 * Acordate de hacerlo con bluebird.
 *
 */
const Promise = require("bluebird");

function helloWorldAsync() {
	promesa = Promise.reject(new Error({
		mensaje: "Hola mundo!"
	}))
return promesa;
}


module.exports = helloWorldAsync;
