import React from "react";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export function CharacterList() {
  const { err, loading, data } = useCharacters();

  console.log(err, loading, data);
  if (loading) return <div>loading...</div>;
  if (err) return <div>Something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
