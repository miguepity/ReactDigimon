import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchCard from '../components/SearchCard';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            digimons: [],
            digisearch: ''
        }
    }
    componentDidMount() {
        fetch('https://digimon-api.vercel.app/api/digimon').then(response => {
            return response.json();
        }).then(digi => {
            this.setState({ digimons: digi });
        })
    }
    onSearchCard = (event) => {
        this.setState({ digisearch: event.target.value });
    }
    render() {
        const digimonFilter = this.state.digimons.filter(digimon => {
            return digimon.name.toLowerCase().includes(this.state.digisearch.toLowerCase());
        })
        if (this.state.digimons.length === 0) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Digimon Cards</h1>
                    <SearchCard searchCard={this.onSearchCard} />
                    <Scroll>
                        <CardList digimons={digimonFilter} />
                    </Scroll>
                </div>
            );
        }


    }
}

export default App;
