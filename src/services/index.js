import axios from 'axios';

export const getPokemons = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(res => {
      const { results } = res.data;
      return results;
    })
    .then(async pokemons => {
      const dataArr = await pokemons.reduce(async (accum, pokemon) => {
        const { name, url } = pokemon;
        const data = await axios.get(url);
        const { sprites } = data.data;

        const item = {
          name,
          url: sprites.other['official-artwork'].front_default,
        };

        return [...accum, item];
      }, []);

      console.log(dataArr);

      return dataArr;
    })
    .catch(err => console.log(err));
};
