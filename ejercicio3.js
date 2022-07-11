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

const getPokemon = (pokemon) => {
    let options = {
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        method: "GET",
        json: true
    }
    return request(options);
}

const buildFight = (pokemon1, pokemon2) => {
    return Promise.all([getPokemon(pokemon1), getPokemon(pokemon2)])
}

module.exports = buildFight;