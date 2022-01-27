import React from 'react';
import PropTypes from 'prop-types'; // ES6
import PokeType from '../PokeType/PokeType';
import './index.css';

function PokeCard({ species, sprites, types, id }) {
  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={sprites.front_default} alt="" />
      <div className="pokemon-content">
        <p>#{id}</p>
        <p className="font-bold pokemon-name">
          {species.name.charAt(0).toUpperCase() + species.name.slice(1)}
        </p>
        <PokeType types={types} key={id} />
      </div>
    </div>
  );
}

PokeCard.defaultProps = {
  species: { name: '' },
  sprites: { front_shiny: '' },
  types: [{ name: '' }],
};

PokeCard.propTypes = {
  species: PropTypes.shape({ name: PropTypes.string }),
  sprites: PropTypes.shape({ front_default: PropTypes.string }),
  types: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  id: PropTypes.string,
};

export default PokeCard;
