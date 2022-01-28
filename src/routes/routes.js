import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages';
import PokemonDetails from '../pages/PokemonDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="pokemon/:pokemondId" element={<PokemonDetails />} />
    </Routes>
  );
}

export default AppRoutes;
