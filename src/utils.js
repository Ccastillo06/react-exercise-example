export const TYPES_BY_ID = {
  1: 'Grass',
  25: 'Electric',
  150: 'Psychic',
};

export const pokemonData = [
  {
    name: 'Pikachu',
    id: 25,
  },
  {
    name: 'Bulbasaur',
    id: 1,
  },
  {
    name: 'Mewtwo',
    id: 150,
  },
];

export const enhanceWithTypes = (pokemon) =>
  pokemon.map((pkmn) => ({
    ...pkmn,
    type: TYPES_BY_ID[pkmn.id],
  }));
