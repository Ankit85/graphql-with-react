import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";
import "./CharacterDetail.css";

export function CharacterDetail() {
  const { id } = useParams();
  const { err, loading, data } = useCharacter(id);

  console.log({ err, loading, data });

  if (loading) return <div>loading...</div>;
  if (err) return <div>Something went wrong</div>;
  return (
    <div className="Character">
      <img width={450} height={450} src={data.character.image} alt="" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>

        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div key={episode.id}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
