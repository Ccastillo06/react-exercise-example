/**
 * No puedes cambiar nada de este archivo como solución al ejercicio! ❌
 */
import PokemonCard from './PokemonCard';
import { TYPES_BY_ID } from './utils';

function PokemonList({ pokemon, onRenderPokemon }) {
  return (
    <>
      {pokemon.map((pkmn, index) => {
        // Validación para comprobar que siempre hay TYPE
        if (!pkmn.type || !Object.values(TYPES_BY_ID).includes(pkmn.type)) {
          throw new Error('No hay type en uno de los pokemon!');
        }

        return (
          <PokemonCard key={pkmn.id + index} onRenderPokemon={onRenderPokemon} pokemon={pkmn} />
        );
      })}
    </>
  );
}

export default PokemonList;
