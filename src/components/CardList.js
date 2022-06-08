import React from 'react';
import Card from '../components/Card';

const CardList = ({ digimons }) => {
    return (
        <div>
            {
                digimons.map((digimon, i) => {
                    return (
                        <Card
                            key={i}
                            name={digimons[i].name}
                            photo={digimons[i].img}
                            level={digimons[i].level}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;