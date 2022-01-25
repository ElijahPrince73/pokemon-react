import React, { useState, useEffect } from "react";
import axios from "axios";

import PokeList from "./PokemonList/PokemonLists";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_POKEMON_API}/pokemon/`
    );

    setData(data);
  }, []);

  console.log(data);

  return (
    <div className="container p-6">
      <h3 className="text-5xl">Pokedex</h3>
      <PokeList pokemon={data.results} />
    </div>
  );
};

export default App;
