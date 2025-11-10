"use client";

import * as pokemonService from "../services/pokemonService";
import { useState, useEffect } from "react";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=> {
    const fetchAllPokemon = async () => {
      const fetchedPokemon = await pokemonService.showPokemonData();
      setPokemon(fetchedPokemon.results);
    }
    fetchAllPokemon();
  }, [])
  return (
    <>
      <ul>
        {pokemon.map((mon) => (
          <li key={mon.url}>{mon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;