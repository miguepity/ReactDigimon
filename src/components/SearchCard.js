import React from 'react';

const SearchCard = ({ searchCard }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--yellow bg-lightest-blue'
                type="search"
                placeholder="Search Digimon"
                onChange={searchCard}
            />
        </div>

    );

}

export default SearchCard;