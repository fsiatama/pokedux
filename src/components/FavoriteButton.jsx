import React from 'react';
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const FavoriteButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return <Button icon={<Icon />} onClick={onClick} />;
};

export default FavoriteButton;
