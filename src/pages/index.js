import React from 'react';
import Layout from '../components/Layout/Layout';
import PokemonList from '../components/PokemonList/PokemonLists';
import PokemonContextProvider from '../context/AllPokemonContext/AllPokemonContext';

function HomePage() {
  return (
    <PokemonContextProvider>
      <Layout>
        <PokemonList />
      </Layout>
    </PokemonContextProvider>
  );
}

export default HomePage;
