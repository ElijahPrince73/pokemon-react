import React from 'react';
import { useNavigate } from 'react-router';
import { usePokemonContext } from '../../context/AllPokemonContext/AllPokemonContext';
import './index.css';

function Filter() {
  const navigate = useNavigate();
  const {
    sortByLowestNumber,
    sortByHighestNumber,
    sortByAlphabetically,
    sortByAlphabeticallyReversed,
  } = usePokemonContext();

  const getRandomPokemon = () => {
    const min = Math.ceil(1);
    const max = Math.floor(898);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const path = `/pokemon/${getRandomPokemon()}`;

  const handlePokemonSort = ({ target: { value } }) => {
    if (value === 'lowestNumber') {
      sortByLowestNumber();
    }
    if (value === 'highestNumber') {
      sortByHighestNumber();
    }
    if (value === 'alphabetical') {
      sortByAlphabetically();
    }
    if (value === 'alphabeticalReverse') {
      sortByAlphabeticallyReversed();
    }
  };

  return (
    <div className="filter-container">
      <button
        className="btn-blue surprise-btn hover"
        type="button"
        onClick={() => navigate(path)}
      >
        Surprise me
      </button>
      <select
        name="cars"
        className="filter-btn"
        onChange={(e) => handlePokemonSort(e)}
      >
        <option value="">Sort results by...</option>
        <option value="lowestNumber">Lowest number first(First)</option>
        <option value="highestNumber">Highest number first(Last)</option>
        <option value="alphabetical">A - Z</option>
        <option value="alphabeticalReverse">Z - A</option>
      </select>
    </div>
  );
}

export default Filter;
