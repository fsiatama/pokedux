import React from 'react';
import { Input } from 'antd';
import usePokemonList from './customHooks/usePokemonList';

const Searcher = () => {
  const { onSearch } = usePokemonList();
  return (
    <Input.Search placeholder="Buscar..." allowClear onSearch={onSearch} />
  );
};

export default Searcher;
