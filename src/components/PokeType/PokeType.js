import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './index.css';

function PokeType({ types }) {
  return (
    <div className="pokemon-types">
      {types.map(({ type: { name } }) => (
        <>
          {name === 'grass' ? <p className="type type-grass">{name}</p> : null}
          {name === 'water' ? <p className="type type-water">{name}</p> : null}
          {name === 'fire' ? <p className="type type-fire">{name}</p> : null}
          {name === 'poison' ? (
            <p className="type type-poison">{name}</p>
          ) : null}
          {name === 'bug' ? <p className="type type-bug">{name}</p> : null}
          {name === 'flying' ? (
            <p className="type type-flying">{name}</p>
          ) : null}
          {name === 'normal' ? (
            <p className="type type-normal">{name}</p>
          ) : null}
        </>
      ))}
    </div>
  );
}

PokeType.defaultProps = {
  types: [],
};

PokeType.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default PokeType;
