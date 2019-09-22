import React from "react";

import "./App.css";
import { CardList } from "./components/card-list/Card-list.component";
import { SearchBox } from "./components/Search-box/searchBox.component";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input
          type="search"
          placeholder="search monsters"
          onChange={e =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            )
          }
        ></input> */}

        <SearchBox
          placeholder="search monsters"
          handlechange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
