/*
 * Te vamos a pasar como parámetro un id de pokemon y un id de su habilidad
 * (Mas info en: https://pokeapi.co/)
 *
 * La información retornada debera ser el nombre del pokemon y el nombre de la habilidad consultados dentro
 * de un objeto con el formato { pokemon, habilidad }.
 *  
 */

const request = require("request-promise");
const Promise = require("bluebird");

const getAPI = (resource, id) => {
    let options = {
        url: `https://pokeapi.co/api/v2/${resource}/${id}`,
        method: "GET",
        json: true
    }
    return request(options);
}

function buildPokemon(id, habilidadId) {
    return Promise.all([getAPI("pokemon", id), getAPI("ability", habilidadId)]).then(([pokemon, habilidad]) => {
        return {
            pokemon: pokemon.name,
            habilidad: habilidad.name
        }
    })
}

module.exports = buildPokemon;