import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../services';
import { setPokemons as setPokemonsActions } from '../../actions';

const usePokemonList = () => {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pok = await getPokemons();
      dispatch(setPokemonsActions(pok));
    };
    fetchPokemons();
  }, [dispatch]);

  return { pokemons };
};

export default usePokemonList;
