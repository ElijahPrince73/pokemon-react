import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './index.css';

function PokeType({ types }) {
  return (
    <div className="pokemon-types">
      {types.map(({ type: { name } }) => (
        <>
          {name === 'grass' ? (
            <p key={name} className="type type-grass">
              {name}
            </p>
          ) : null}
          {name === 'water' ? (
            <p key={name} className="type type-water text-white">
              {name}
            </p>
          ) : null}
          {name === 'fire' ? (
            <p key={name} className="type type-fire text-white">
              {name}
            </p>
          ) : null}
          {name === 'poison' ? (
            <p key={name} className="type type-poison text-white">
              {name}
            </p>
          ) : null}
          {name === 'bug' ? (
            <p key={name} className="type type-bug text-white">
              {name}
            </p>
          ) : null}
          {name === 'flying' ? (
            <p key={name} className="type type-flying">
              {name}
            </p>
          ) : null}
          {name === 'normal' ? (
            <p key={name} className="type type-normal">
              {name}
            </p>
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
