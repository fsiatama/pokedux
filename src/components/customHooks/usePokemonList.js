import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  fetchPokemonsWithDetails,
  setFilteredPokemons,
} from '../../slices/dataSlice';
const usePokemonList = () => {
  const pokemons = useSelector(
    state => state.data.filteredPokemons,
    shallowEqual,
  );
  const loading = useSelector(state => state.ui.loading);
  const dispatch = useDispatch();

  const onSearch = value => dispatch(setFilteredPokemons(value));

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch]);

  return { pokemons, loading, onSearch };
};

export default usePokemonList;
