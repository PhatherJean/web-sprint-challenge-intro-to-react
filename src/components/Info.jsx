import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Info(props) {
  const { characterId, close } = props;
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${characterId}`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  }, [characterId]);

  return (
    <div className="contain">
      <h2>Stats:</h2>
      {info && (
        <>
          <img src={info.url} alt={info.name} />
          <p>Name: {info.name}</p>
          <p>Height: {info.height}</p>
          <p>Mass: {info.mass} </p>
          <p>Birth Year: {info.birth_year} </p>
          <p>Eye Color: {info.eye_color} </p>
          <p>Hair Color: {info.hair_color} </p>
          <p>Skin Color: {info.skin_color} </p>
        </>
      )}
      <button onClick={close}>Close</button>
    </div>
  );
}
