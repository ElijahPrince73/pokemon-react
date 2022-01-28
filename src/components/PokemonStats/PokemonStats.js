import React from 'react';
import { BarChart, Bar, XAxis } from 'recharts';
import './index.css';

function PokemonStats({ data }) {
  const barData = data.map((stat) => ({
    baseStat: stat.base_stat,
    name: stat.stat.name,
  }));

  return (
    <div className="pokemon-stats">
      <h4 className="pokemon-name title">Stats</h4>
      <BarChart width={400} height={200} data={barData}>
        <XAxis
          dataKey="name"
          textAnchor="middle"
          sclaeToFit="true"
          verticalAnchor="start"
          interval={0}
          angle="-15"
          stroke="#000"
        />
        <Bar dataKey="baseStat" fill="#169DCE" barSize={30} />
      </BarChart>
    </div>
  );
}

export default PokemonStats;
