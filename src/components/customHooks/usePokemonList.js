import { useEffect, useState } from 'react';
import { getPokemons } from '../../services';

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const pok = await getPokemons();
    setPokemons(pok);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons };
};

export default usePokemonList;
