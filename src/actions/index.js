import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from './types';
import { getPokemonsDetails } from '../services';

export const setPokemons = payload => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = payload => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async dispatch => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map(pokemon => getPokemonsDetails(pokemon)),
    );
    dispatch(setPokemons(pokemonsDetailed));
  };
