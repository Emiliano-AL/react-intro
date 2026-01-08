import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

    return (
        <input
            className="TodoSearch" 
            placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(evt) =>  setSearchValue(evt.target.value)}
            />
    )
}

export { TodoSearch };