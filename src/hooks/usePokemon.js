import { useState } from 'react';
import { useEffect } from 'react';
import fetchPokemon from '../services/pokemonService';


export function usePokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchPokemon();
        setPokemon(response);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { pokemon, loading, error };
}