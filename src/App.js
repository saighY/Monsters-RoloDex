import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { Search } from './components/search-box/search-box-component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchBox: '',
        };

        // this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((Response) => Response.json())
            .then((user) => this.setState({ monsters: user }));
    }

    handleSearchTextChange = (e) => {
        this.setState({ searchBox: e.target.value });
    };

    render() {
        const { monsters, searchBox } = this.state;

        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchBox.toLowerCase()),
        );

        return (
            <div className="App">
                <h1> Monsters RoloDex </h1>
                <Search placeholder="Search Monsters" handleChange={this.handleSearchTextChange} />
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;
