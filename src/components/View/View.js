import { usePokemon } from '../../hooks/usePokemon';
import PokeCards from '../PokeCards/PokeCards';
import './View.css';

export default function View() {

  // const { pokemon, loading, error } = usePokemon();
  // console.log('pokemon is: ', pokemon);
  
  // if (error)
  //   return <h2>{error.message}</h2>;

  // if (loading)
  //   return <span>...loading</span>;

  return (
    // <div>
    //   {pokemon.map(poke => (
    //     <PokeCards key={poke.id} {...poke} />
    //   ))}
    // </div>
    <PokeCards />
  );
}