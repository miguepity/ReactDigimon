import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchCard from '../components/SearchCard';
import Scroll from '../components/Scroll';
import './App.css'

function App() {
    const [digimons, setDigimons] = useState([]);
    const [digisearch, setDigisearch] = useState('');

    useEffect(() => {
        fetch('https://digimon-api.vercel.app/api/digimon').then(response => {
            return response.json();
        }).then(digi => {
            setDigimons(digi);
        })
    }, [])

    const onSearchCard = (event) => {
        setDigisearch(event.target.value);
    }

    const digimonFilter = digimons.filter(digimon => {
        return digimon.name.toLowerCase().includes(digisearch.toLowerCase());
    })
    if (digimons.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className="tc">
                <h1 className="f1">Digimon Cards</h1>
                <SearchCard searchCard={onSearchCard} />
                <Scroll>
                    <CardList digimons={digimonFilter} />
                </Scroll>
            </div >
        );
    }
}

export default App;
