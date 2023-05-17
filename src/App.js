import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.componets";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [characters, setCharacters] = useState([]);
  const [filteredList, setFilteredList] = useState(characters);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime/20/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data.data));
  }, []);

  useEffect(() => {
    const newFilteredList = characters.filter((ch) => {
      return ch.character.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredList(newFilteredList);
  }, [characters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1>Naruto Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="qahramonlarni qidirish"
      />

      <div className="card-list-container">
        <CardList characters={filteredList} />
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       characters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://api.jikan.moe/v4/anime/20/characters")
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState(() => {
//           return {characters: data.data};
//         });
//       });
//   }

//   render() {
//     const {characters, searchField} = this.state;
//     const {onSearchChange} = this;

// const filteredList = characters.filter((ch) => {
//   return ch.character.name.toLocaleLowerCase().includes(searchField);
// });

//     return (
//       <div className="App">
//         <h1>Naruto Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           className="search-box"
//           placeholder="qahramonlarni qidirish"
//         />
//         <div className="card-list-container">
//           <CardList characters={filteredList} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
