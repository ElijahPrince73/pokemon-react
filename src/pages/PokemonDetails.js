import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import formatTypes from '../utils/formatTypes';

// import DetailsHeader from '../components/DetailsHeader/DetailsHeader';
import PokemonStats from '../components/PokemonStats/PokemonStats';
import PokeType from '../components/PokemonType/PokemonType';
import PokemonBaseInfo from '../components/PokemonBaseInfo/PokemonBaseInfo';
import PokemonEvolutions from '../components/PokemonEvolutions/PokemonEvolutions';

function PokemonDetails() {
  const { pokemondId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetails, setPokemon] = useState({});

  const fetchPokemonDetails = async () => {
    setIsLoading(true);

    const pokemonResult = await Promise.all([
      axios.get(`${process.env.REACT_APP_POKEMON_API}/pokemon/${pokemondId}`),
      axios.get(
        `${process.env.REACT_APP_POKEMON_API}/pokemon-species/${pokemondId}`
      ),
    ]);

    const evolutionChain = await axios.get(
      pokemonResult[1].data.evolution_chain.url
    );

    const evoChain = [];

    // eslint-disable-next-line consistent-return
    const getEvolutionChain = (arr) => {
      if (arr[0].evolves_to.length > 0) {
        evoChain.push(arr[0].species.name);
        getEvolutionChain(arr[0].evolves_to);
      } else {
        evoChain.push(arr[0].species.name);
        return 0;
      }
    };
    getEvolutionChain([evolutionChain.data.chain]);

    const pokemonEvolutionChainResult = await Promise.all(
      evoChain.map((pokemonName) =>
        axios.get(`${process.env.REACT_APP_POKEMON_API}/pokemon/${pokemonName}`)
      )
    );

    const pokemonEvolutionChain = pokemonEvolutionChainResult.map(
      ({ data }) => ({
        name: data.name,
        imageUrl: data.sprites.front_default,
        id: data.id,
        types: formatTypes(data.types),
      })
    );

    const pokemonTypes = pokemonResult[0].data.types.map(
      ({ type }) => type.name
    );

    const pokemonTypeResult = await Promise.all(
      pokemonTypes.map((pokemonName) =>
        axios.get(`${process.env.REACT_APP_POKEMON_API}/type/${pokemonName}`)
      )
    );

    const pokemonWeakness = pokemonTypeResult.map(
      ({ data }) => data.damage_relations.double_damage_from
    );

    const allWeakness = pokemonWeakness.map((weaknesses) =>
      weaknesses.map((weakness) => ({ name: weakness.name }))
    );

    const formatedWeakens = [].concat(...allWeakness);

    const { types } = pokemonResult[0].data;

    const formatedTypes = formatTypes(types);

    const pokemonCombinedResults = {
      ...pokemonResult[0].data,
      ...pokemonResult[1].data,
      weaknesses: formatedWeakens,
      types: formatedTypes,
      evolutionChain: pokemonEvolutionChain,
    };

    setPokemon(pokemonCombinedResults);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonDetails().catch(console.error());
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const {
    name,
    id,
    sprites,
    stats,
    types,
    abilities,
    height,
    weight,
    flavor_text_entries,
    weaknesses,
    evolutionChain,
  } = pokemonDetails;

  // Need to get all pokemon and get the next one by id

  return (
    <div>
      {/* <DetailsHeader evolutionChain={evolutionChain} pokemonId={id} /> */}
      <div className="pokemon-container">
        <h3 className="pokemon-name text-center">
          {name} #{id}
        </h3>
        <div className="row">
          <div className="column">
            <img className="pokemon-image" src={sprites.front_default} alt="" />
            <PokemonStats data={stats} />
          </div>
          <div className="column">
            <p className="pokemon-description">
              {flavor_text_entries[9].flavor_text}
            </p>
            <PokemonBaseInfo
              height={height}
              weight={weight}
              abilities={abilities}
            />
            <div className="mt-3">
              <h4 className="pokemon-name title">Type</h4>
              <PokeType types={types} />
            </div>
            <div className="mt-3">
              <h4 className="pokemon-name title">Weaknesses</h4>
              <PokeType weakness types={weaknesses} />
            </div>
          </div>
        </div>

        <PokemonEvolutions evolutionChain={evolutionChain} types={types} />
      </div>
    </div>
  );
}

export default PokemonDetails;
