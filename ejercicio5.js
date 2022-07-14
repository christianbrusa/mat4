/*
 * Dado un array con nombres de pokémon (que puede ser un Array normal o
 * una Promise que resuelva a un Array), queremos que por cada nombre busques ese pokémon
 * en la api y te quedes con el nombre (name), la altura (height) y el peso (weight).
 *
 * Una vez hecho esto, queremos que te quedes sólo con los pokémon cuya altura sea mayor a 10
 * y luego los ordenes según su peso de menor a mayor.
 * 
 * Al final nos queremos quedar sólo con los nombres de los pokemon ordenados y filtrados
 * 
 */

const request = require("request-promise");
const Promise = require("bluebird");

const getPokemon = (name) => {
    let options = {
        url: `https://pokeapi.co/api/v2/pokemon/${name}`,
        method: "GET",
        json: true
    }
    return request(options);
}

function getPokemonProperties(pokemons) {
    return Promise.map(pokemons, function(pokemon) {
        return getPokemon(pokemon)
            .then(pokemon => {
                return {
                    "nombre": pokemon.name,
                    "altura": pokemon.height,
                    "peso": pokemon.weight
                }
            })
    })
}

const filterPokemonHeight = (pokemons) => {
    return getPokemonProperties(pokemons)
    .then(pokemons => pokemons.filter(pokemon => pokemon.altura > 10))
}

const sortPokemons = (pokemons) => {
	return filterPokemonHeight(pokemons)
	.then(pokemons => pokemons.sort((a,b) => (a.peso > b.peso ? 1 : -1)))
}

const getPokemonFromArray = (pokemons) => {
	return sortPokemons(pokemons)
  	.then(pokemons => pokemons.map(pokemon => pokemon.nombre))
}

module.exports = getPokemonFromArray;