/* eslint-disable comma-dangle */
import React from 'react';
import PokemonContextProvider from './context/PokemonContext';

import Routes from './routes/routes';

function App() {
  return (
    <PokemonContextProvider>
      <div className="container">
        <Routes />
      </div>
    </PokemonContextProvider>
  );
}

export default App;
