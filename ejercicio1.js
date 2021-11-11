/*
 * Ahora que sabemos más cosas, repasemos lo básico.
 * Te pedimos que hagas una Promise que resuelva al string "Hola mundo!"
 * Sí, es el mismo ejercicio que la semana pasada, pero hacelo con bluebird
 *
 */
const Promise = require("bluebird");

function helloWorldAsync() {
	promesa = Promise.resolve("Hola mundo!")
	return promesa;
}



module.exports = helloWorldAsync;