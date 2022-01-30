import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './index.css';

function PokeType({ types, className = '' }) {
  return (
    <div className={`pokemon-types ${className}`}>
      {types.map(({ name }) => (
        <p key={name} className={`type type-${name} text-white`}>
          {name}
        </p>
      ))}
    </div>
  );
}

PokeType.defaultProps = {
  types: [],
  className: '',
};

PokeType.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

export default PokeType;
