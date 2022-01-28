import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const PokemonContext = React.createContext([]);

function PokemonContentProvider({ children }) {
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

  return (
    <PokemonContext.Provider value={allPokemon}>
      {children}
    </PokemonContext.Provider>
  );
}

PokemonContentProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export function usePokemonContext() {
  return React.useContext(PokemonContext);
}

export default PokemonContentProvider;
