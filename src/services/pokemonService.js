import { usePokemon } from '../hooks/usePokemon';

export default async function fetchPokemon() {

  const response = await fetch(`
    https://pokedex-alchemy.herokuapp.com/api/pokedex
  `);
  const data = await response.json();
  return data.results;
}