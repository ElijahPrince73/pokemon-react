import React from 'react';
import Header from '../components/Header/Header';
import PokemonList from '../components/PokemonList/PokemonLists';
import Filter from '../components/Filters/Filter';
import PokemonContextProvider from '../context/AllPokemonContext/AllPokemonContext';

function HomePage() {
  return (
    <PokemonContextProvider>
      <Header />
      <Filter />
      <PokemonList />
    </PokemonContextProvider>
  );
}

export default HomePage;
