const axios = require("axios");
const baseURL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters(name = null) {
  try {
    const url = name ? `${baseURL}/?name=${name}` : baseURL;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return { error: "No se ha encontrado los personajes" };
  }
}

module.exports = fetchCharacters;
