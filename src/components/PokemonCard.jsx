import React from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import usePokemonCard from './customHooks/usePokemonCard';

const PokemonCard = ({ pokemon }) => {
  const { name, image, description } = usePokemonCard({ pokemon });
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
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
