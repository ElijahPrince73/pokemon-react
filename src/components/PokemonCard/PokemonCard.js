import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';
import PokemonType from '../PokemonType/PokemonType';
import './index.css';

function PokeCard({ species, sprites, types, id }) {
  return (
    <Link to={`/pokemon/${id}`} className="pokemon-card block">
      <img className="pokemon-image" src={sprites.front_default} alt="" />
      <div className="pokemon-content">
        <p>#{id}</p>
        <p className="font-bold pokemon-name">{species.name}</p>
        <PokemonType types={types} key={id} />
      </div>
    </Link>
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
  id: PropTypes.number,
};

export default PokeCard;
