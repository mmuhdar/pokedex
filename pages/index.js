import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

import Card from "../components/Card";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(({ data }) => {
        setPokemon(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-10 mt-10">
        <div className="text-3xl font-bold">Pokedex</div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 mx-auto gap-2 lg:w-full sm:w-full mt-5">
          {pokemon.map((item, index) => {
            return <Card url={item.url} key={index} />;
          })}
        </div>
      </main>
    </div>
  );
}
