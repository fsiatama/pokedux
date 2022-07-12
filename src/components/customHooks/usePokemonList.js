import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokemonsDetails } from '../../services';
import { setPokemons as setPokemonsActions } from '../../actions';

const usePokemonList = () => {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRest = await getPokemons();
      const pokemonsDetaildes = await Promise.all(
        pokemonsRest.map(pokemon => getPokemonsDetails(pokemon)),
      );
      dispatch(setPokemonsActions(pokemonsDetaildes));
    };
    fetchPokemons();
  }, [dispatch]);

  return { pokemons };
};

export default usePokemonList;
