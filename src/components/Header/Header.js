import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './index.css';

function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const searchPokemon = async (pokemonNameOrId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_POKEMON_API}/pokemon/${pokemonNameOrId}`
    );

    const path = `/pokemon/${data.id}`;
    navigate(path);
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="header-search-container">
          <h3 className="header-title">Search by Name or Number</h3>
          <div className="header-search">
            <input
              type="text"
              className="search-input"
              value={value}
              onChange={(e) => setValue(e.target.value.toLocaleLowerCase())}
            />
            <button
              type="button"
              className="btn-orange"
              onClick={() => searchPokemon(value)}
            >
              Search
            </button>
          </div>
          <p className="header-advanced-search-text">
            Use the advanced search to explore Pokemon by type, weakness,
            ability, and more
          </p>
        </div>
        <div className="header-content">
          <p>
            Search for a Pokemon by name or using its National Pokedex number.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
