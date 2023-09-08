import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_HOST;

  useEffect(() => {
    fetch(apikey)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">List of Pokemon</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pokemonList.map((pokemon, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-lg font-semibold">{pokemon.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
