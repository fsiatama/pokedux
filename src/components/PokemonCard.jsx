import React from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="Fire, Metal" />
    </Card>
  );
};
PokemonCard.defaultProps = {
  name: 'Ditto',
  url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
};

export default PokemonCard;
