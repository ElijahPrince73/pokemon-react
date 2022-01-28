import React from 'react';
import Header from '../components/Header/Header';
import PokemonList from '../components/PokemonList/PokemonLists';
import Filter from '../components/Filters/Filter';

function HomePage() {
  return (
    <>
      <Header />
      <Filter />
      <PokemonList />
    </>
  );
}

export default HomePage;
