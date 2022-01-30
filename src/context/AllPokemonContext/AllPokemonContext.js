import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const PokemonContext = React.createContext({
  allPokemon: [],
  fetchPokemon: () => {},
  loading: true,
  sortByLowestNumber: () => {},
  sortByHighestNumber: () => {},
  sortByAlphabetically: () => {},
  sortByAlphabeticallyReversed: () => {},
});

function PokemonContentProvider({ children }) {
  const [allPokemon, setPokemon] = useState([]);
  const [pokeUrl, setPokeUrl] = useState(
    `${process.env.REACT_APP_POKEMON_API}/pokemon/?limit=12`
  );
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    const {
      data: { results, next },
    } = await axios.get(pokeUrl);

    setPokeUrl(next);

    const pokemonUrls = results.map((pokemon) => pokemon.url);

    const allPokemonResult = await Promise.all(
      pokemonUrls.map((pokemonUrl) => axios.get(pokemonUrl))
    );

    setPokemon([...allPokemon, ...allPokemonResult]);
    setLoading(false);
  };

  const sortByLowestNumber = () => {
    setPokemon([...allPokemon.sort((a, b) => a.data.id - b.data.id)]);
  };
  const sortByHighestNumber = () => {
    setPokemon([...allPokemon.sort((a, b) => b.data.id - a.data.id)]);
  };
  const sortByAlphabetically = () => {
    setPokemon([
      ...allPokemon.sort((a, b) => a.data.name.localeCompare(b.data.name)),
    ]);
  };
  const sortByAlphabeticallyReversed = () => {
    setPokemon([
      ...allPokemon.sort((a, b) => b.data.name.localeCompare(a.data.name)),
    ]);
  };

  useEffect(() => {
    fetchPokemon().catch();
  }, []);

  const pokemonValues = useMemo(() => ({
    allPokemon,
    fetchPokemon,
    sortByLowestNumber,
    sortByHighestNumber,
    sortByAlphabetically,
    sortByAlphabeticallyReversed,
    loading,
  }));

  return (
    <PokemonContext.Provider value={pokemonValues}>
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
