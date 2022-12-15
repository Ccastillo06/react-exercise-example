// Para solucionar el ejercicio solo puedes cambiar el código en este archivo! 🚨
// Solamnete puedes usar la función enhanceWithTypes una vez en todo el archivo! 😱
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { enhanceWithTypes, pokemonData } from './utils';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setPokemon(pokemonData);
  }, []);

  const pokemonWithTypes = enhanceWithTypes(pokemon);

  const handleLoadMore = () => {
    setPokemon((prev) => [...prev, ...pokemonData]);
  };

  return (
    <div className="App">
      <h1>Arregla el render infinito! ∞</h1>

      <button onClick={handleLoadMore}>Cargar más</button>

      <h3>Render de filas: {renderCount}</h3>

      <PokemonList pokemon={pokemonWithTypes} onRenderPokemon={setRenderCount} />
    </div>
  );
}

export default App;
