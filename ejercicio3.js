/*
 * Te vamos a pasar como parámetro 2 pokémon oponentes.
 *
 * Hay que retornar una lista con la informacion de los dos pokemon que devuelve la API
 * 
 * En cada parametro se recibe el nombre del pokemon
 * 
 */
const Promise = require("bluebird");
const request = require("request-promise");

function buildFight(pokemon1, pokemon2) {
	const getPokemon = (pokemon) => request.get({
		url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
		json: true
		}).promise()
	//.then(({results}) => results)
	//.map(pokemon => getPokemon1(pokemon1))

	return Promise.all([
	getPokemon(pokemon1),
	getPokemon(pokemon2)
	]);

	/*aca estariamos devolviendo un array pero no una promesa
	por lo tanto, devolveria error. es por ello, que usamos Promise.all*/

	/*var array[
	getPokemon(pokemon1),
	getPokemon(pokemon2)
	];*/

}

module.exports = buildFight;