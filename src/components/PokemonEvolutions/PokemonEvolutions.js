import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import PokeType from '../PokemonType/PokemonType';

function PokemonEvolutions({ evolutionChain }) {
  return (
    <div className="mt-3 pokemon-evolutions-container">
      <h4 className="pokemon-name title text-white">Evolutions</h4>
      <div className="pokemon-evolutions">
        {evolutionChain.map(({ name, imageUrl, id, types }, index) => (
          <div key={id} className="pokemon-evolutions-card">
            <div>
              <div className="evolution-image">
                <img src={imageUrl} alt={name} className="w-full" />
              </div>
              <p className="pokemon-name title text-center text-white">
                {name} #{id}
              </p>
              <div className="w-full m-auto">
                <PokeType types={types} className="justify-center" />
              </div>
            </div>
            <div className="align-center">
              {evolutionChain.length - 1 === index ? null : (
                <div className="w-half medium-w-full m-auto text-center my-3 ">
                  <span className="chevron bottom" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

PokemonEvolutions.propTypes = {
  evolutionChain: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PokemonEvolutions;
