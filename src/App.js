import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import usePokemonList from './components/customHooks/usePokemonList';
import './App.css';

function App() {
  const { pokemons } = usePokemonList();
  return (
    <div className="App">
      <Col span={4} offset={10} className="App_logo">
        <img
          src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"
          alt="Logo Pokedux"
        />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col span={20} offset={2}>
        <PokemonList pokemons={pokemons} />
      </Col>
    </div>
  );
}

export default App;
