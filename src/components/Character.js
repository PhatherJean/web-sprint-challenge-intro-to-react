// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character(props) {
  const { character, action } = props;
  console.log(props);
  return (
    <StyleChar>
      {character.name}
      <button onClick={() => action(character.id)}>See Info</button>
    </StyleChar>
  );
}
const StyleChar = styled.div`
  color: red;
  padding: 2%;
  background-color: white;
  width: 75%;
  margin: 0 auto;
  .contain {
    border: 1px solid brown;
    box-shadow: 1px #873f87;
  }
`;
