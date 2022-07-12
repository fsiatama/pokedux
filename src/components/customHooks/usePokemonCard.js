const usePokemonCard = ({ pokemon }) => {
  const { name, sprites, abilities } = pokemon;
  const description = abilities.reduce((accum, item) => {
    const { ability } = item;
    return [...accum, ability.name];
  }, []);

  return {
    name,
    image: sprites.front_default,
    description: description.join(', '),
  };
};

export default usePokemonCard;
