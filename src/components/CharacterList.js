import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const CharacterList = props => {
  return (
    <section className="character-list">
      <SearchForm />
      <p>
        {props.charListState.map(character => (
          <Link to={`/characters/${character.id}`}>
            <h2>{character.name}</h2>
          </Link>
        ))}
      </p>
    </section>
  );
};

export default CharacterList;

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect
//   const [characterListState, setCharacterListState] = useState([]);

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//     const getCharacters = () => {
//       axios
//         .get(
//           "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
//         )
//         .then(response => {
//           console.log(response);
//           setCharacterListState(response.data.results);
//         })
//         .catch(error => {
//           console.error("Server Error", error);
//         });
//     };

//     getCharacters();
//   }, []);

//   return (
//     <section className="character-list">
//       <SearchForm />
//       <h2>
//         {characterListState.map(character => (
//           <Link to={`/characters/${character.id}`}>
//             <h2>{character.name}</h2>
//           </Link>
//         ))}
//       </h2>
//     </section>
//   );
// }
