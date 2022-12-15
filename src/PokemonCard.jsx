/**
 * No puedes cambiar nada de este archivo como solución al ejercicio! ❌
 */
import { useEffect } from 'react';

function PokemonCard({ pokemon, onRenderPokemon }) {
  useEffect(() => {
    onRenderPokemon((prev) => prev + 1);
  }, [pokemon]);

  return (
    <div className="pkmn-card">
      <h3>{pokemon.name}</h3>
      <p>{pokemon.type}</p>
    </div>
  );
}

export default PokemonCard;
