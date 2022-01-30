import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function PokemonBaseInfo({ height, weight, abilities }) {
  const realFeet = height * 0.3937;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);

  const realWeight = weight / 4.536;

  return (
    <div className="pokemon-base-info mt-10">
      <div className="flex">
        <div className="pokemon-base-info-column">
          <h4 className="text-white font-regular">Height</h4>
          <p className="pokemon-base-info-text">{`${feet}'${inches}"`}</p>
        </div>
        <div className="pokemon-base-info-column">
          <h4 className="text-white font-regular">Weight</h4>
          <p className="pokemon-base-info-text">{realWeight.toFixed(1)} lbs</p>
        </div>
      </div>

      <div className="flex mt-3">
        <div className="pokemon-base-info-column">
          <h4 className="text-white font-regular">Gender</h4>
          <p className="pokemon-base-info-text">&#9794; &#9792;</p>
        </div>
        <div className="pokemon-base-info-column">
          <h4 className="text-white font-regular">Abilities</h4>
          <p className="pokemon-base-info-text">
            {abilities.map(({ ability }) => ability.name)}
          </p>
        </div>
      </div>
    </div>
  );
}

PokemonBaseInfo.propTypes = {
  height: PropTypes.number,
  weight: PropTypes.number,
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default PokemonBaseInfo;
