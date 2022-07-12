import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../services';
import { setPokemons as setPokemonsActions } from '../../actions';

const usePokemonList = () => {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRest = await getPokemons();
      dispatch(setPokemonsActions(pokemonsRest));
    };
    fetchPokemons();
  }, [dispatch]);

  return { pokemons };
};

export default usePokemonList;
