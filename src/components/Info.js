import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Info(props) {
  console.log(props);
  const { characterId, close } = props;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(characterId)
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  }, [characterId]);

  return (
    <StyleInfo className="contain">
      <h2>Stats:</h2>
      {info && (
        <>
          <p>Name: {info.name}</p>
          <p>Gender: {info.gender}</p>
          <p>Height: {info.height}</p>
          <p>Mass: {info.mass} </p>
          <p>Birth Year: {info.birth_year} </p>
          <p>Eye Color: {info.eye_color} </p>
          <p>Hair Color: {info.hair_color} </p>
          <p>Skin Color: {info.skin_color} </p>
        </>
      )}
      <button onClick={close}>Close</button>
    </StyleInfo>
  );
}
const StyleInfo = styled.div`
  h2 {
    color: #adff2a;
  }
  color: #bada55;
  padding: 2%;
  background-color: #fff;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  &:hover {
    color: chocolate;
    background-color: #bababa;
  }
  button {
    color: brown;
    &:hover {
      transform: scale(1.1);
      transform: rotate(360deg);
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
`;
