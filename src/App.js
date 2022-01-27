/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokeList from './components/PokemonList/PokemonLists';

function App() {
  const [allPokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const {
      data: { results },
    } = await axios.get(`${process.env.REACT_APP_POKEMON_API}/pokemon/`);

    const pokemonUrls = results.map((pokemon) => pokemon.url);

    const allPokemonResult = await Promise.all(
      pokemonUrls.map((pokemonUrl) => axios.get(pokemonUrl))
    );

    setPokemon(allPokemonResult);
  };

  useEffect(() => {
    fetchPokemon().catch(console.error());
  }, []);

  if (!allPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h3 className="text-5xl">Pokedex</h3>
      <PokeList pokemonData={allPokemon} />
    </div>
  );
}

export default App;
