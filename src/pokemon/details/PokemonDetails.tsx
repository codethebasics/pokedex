import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchPokemonByName(id);
    }
  }, []);

  function fetchPokemonByName(name: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((rawResponse) => rawResponse.json())
      .then((jsonResponse) => setPokemon(jsonResponse))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div>
        <img
          src={pokemon?.sprites?.other?.["official-artwork"].front_default}
          alt={"pokemon"}
        ></img>
      </div>
    </div>
  );
}

export default PokemonDetails;
