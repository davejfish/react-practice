import { usePokemon } from '../../hooks/usePokemon';
import './PokeCards.css';

export default function PokeCards() {

  const { pokemon, loading, error } = usePokemon();
  
  if (error)
    return <h2>{error.message}</h2>;


  return (
    // <div className='pokemon-container'>
    //   <h2>{pokemon}</h2>
    //   <span>{type_1} type</span>
    //   <span>{pokedex}</span>
    // </div>

    <div>
      {loading ? <span>...loading</span> : pokemon.map(poke => (
        <div key={poke.id}>
          <h2>{poke.pokemon}</h2>
          <h2>{poke.type_1} type</h2>
          <h2>{poke.pokedex}</h2>
        </div>
      ))}
    </div>
  );
}