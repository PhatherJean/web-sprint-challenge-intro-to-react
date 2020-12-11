// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character(props) {
  const { character, action } = props;
  return (
    <StyleChar>
      {character.name}
      <button onClick={() => action(character.url)}>See Info</button>
    </StyleChar>
  );
}

const StyleChar = styled.div`
  color: #bada55;
  border: 1px solid chocolate;
  padding: 2%;
  background-color: white;
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  &:hover {
    color: blue;
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
