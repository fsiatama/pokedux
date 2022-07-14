import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getPokemons } from '../../services';
import { getPokemonsWithDetails, setLoading } from '../../actions';

const usePokemonList = () => {
  const pokemons = useSelector(
    state => state.getIn(['data', 'pokemons']),
    shallowEqual,
  ).toJS();
  const loading = useSelector(state => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRest = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRest));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, [dispatch]);

  return { pokemons, loading };
};

export default usePokemonList;
