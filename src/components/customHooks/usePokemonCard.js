import { useDispatch } from 'react-redux';
import { setFavorite } from '../../slices/dataSlice';

const usePokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const { name, sprites, abilities, id, favorite } = pokemon;
  const description = abilities.reduce((accum, item) => {
    const { ability } = item;
    return [...accum, ability.name];
  }, []);

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return {
    name,
    image: sprites.front_default,
    description: description.join(', '),
    favorite,
    handleOnFavorite,
  };
};

export default usePokemonCard;
