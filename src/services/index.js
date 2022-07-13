import axios from 'axios';

export const getPokemons = async () => {
  try {
    const res = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    );
    const { results } = res.data;
    return results;
  } catch (err) {
    return console.log(err);
  }
};

export const getPokemonsDetails = async pokemon => {
  try {
    const res = await axios.get(pokemon.url);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
};
