import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./components/Info";
import Character from "./components/Character";
import "./App.css";
//import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const openDetails = (id) => {
    setCurrentCharacter(id);
  };

  const closeDetails = () => {
    setCurrentCharacter(null);
  };

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        console.log(res);
        setCharactersData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {charactersData.map((character) => {
          return (
            <Character
              key={character.id}
              character={character}
              action={openDetails}
            />
          );
        })}
        <div>
          {currentCharacter && (
            <Info characterId={currentCharacter} close={closeDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
