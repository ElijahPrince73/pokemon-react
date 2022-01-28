import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PokemonContext = React.createContext({});

function PokemonDetailsContentProvider({ children, value }) {
  const [pokemonDetails, setPokemon] = useState(value);

  useEffect(() => setPokemon(value));

  return (
    <PokemonContext.Provider value={pokemonDetails}>
      {children}
    </PokemonContext.Provider>
  );
}

PokemonDetailsContentProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.shape(),
};

export function usePokemonDetailsContext() {
  return React.useContext(PokemonContext);
}

export default PokemonDetailsContentProvider;
