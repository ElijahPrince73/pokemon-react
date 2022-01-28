import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PokemonDetailsContentProvider from '../context/PokemonDetailsContext/PokemonDetailsContext';

import PokemonStats from '../components/PokemonStats/PokemonStats';
import PokeType from '../components/PokemonType/PokemonType';
import PokemonBaseInfo from '../components/PokemonBaseInfo/PokemonBaseInfo';

function PokemonDetails() {
  const { pokemondId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemon] = useState({});

  const fetchPokemonDetails = async () => {
    setIsLoading(true);
    // const { data } = await axios.get(
    //   `${process.env.REACT_APP_POKEMON_API}/pokemon/${pokemondId}`
    // );

    const pokemonResult = await Promise.all([
      axios.get(`${process.env.REACT_APP_POKEMON_API}/pokemon/${pokemondId}`),
      axios.get(
        `${process.env.REACT_APP_POKEMON_API}/pokemon-species/${pokemondId}`
      ),
      // axios.get(
      //   `${process.env.REACT_APP_POKEMON_API}/evolution-chain/${pokemondId}`
      // ),
    ]);

    setPokemon(pokemonResult);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonDetails().catch(console.error());
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  console.log(pokemonDetails);

  const { name, id, sprites, stats, types, abilities, height, weight } =
    pokemonDetails[0].data;
  const { flavor_text_entries } = pokemonDetails[1].data;

  return (
    <PokemonDetailsContentProvider value={pokemonDetails[0]}>
      <div className="container">
        <h3 className="pokemon-name text-center">
          {name} #{id}
        </h3>
        <img className="pokemon-image" src={sprites.front_default} alt="" />
        <PokemonStats data={stats} />
        <p>{flavor_text_entries[9].flavor_text}</p>
        <PokeType types={types} />
        <PokemonBaseInfo
          height={height}
          weight={weight}
          abilities={abilities}
        />
      </div>
    </PokemonDetailsContentProvider>
  );
}

export default PokemonDetails;
