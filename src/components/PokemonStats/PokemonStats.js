import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import './index.css';

function PokemonStats({ data }) {
  const barData = data.map((stat) => ({
    baseStat: stat.base_stat,
    name: stat.stat.name,
  }));

  return (
    <div className="pokemon-stats">
      <h4 className="pokemon-name title">Stats</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={barData}>
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PokemonStats;
