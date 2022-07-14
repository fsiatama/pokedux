import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPokemons, getPokemonsDetails } from '../services';
import { setLoading } from './uiSlice';

const initialState = {
  pokemons: [],
  filteredPokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(pokemon => getPokemonsDetails(pokemon)),
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.filteredPokemons = action.payload;
    },
    setFilteredPokemons: (state, action) => {
      const newPokemons = state.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
      state.filteredPokemons = newPokemons;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.filteredPokemons.findIndex(
        pokemon => pokemon.id === action.payload.pokemonId,
      );
      if (currentPokemonIndex > -1) {
        const isFavorite = state.filteredPokemons[currentPokemonIndex].favorite;

        state.filteredPokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite, setFilteredPokemons } =
  dataSlice.actions;

export default dataSlice.reducer;
