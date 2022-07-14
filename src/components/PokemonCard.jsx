import React from 'react';
import { Card } from 'antd';

import Meta from 'antd/lib/card/Meta';
import usePokemonCard from './customHooks/usePokemonCard';
import FavoriteButton from './FavoriteButton';

const PokemonCard = ({ pokemon }) => {
  const { name, image, description, favorite, handleOnFavorite } =
    usePokemonCard({
      pokemon,
    });

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={
        <FavoriteButton isFavorite={favorite} onClick={handleOnFavorite} />
      }
    >
      <Meta description={description} />
    </Card>
  );
};
PokemonCard.defaultProps = {
  name: 'Ditto',
  url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
};

export default PokemonCard;
