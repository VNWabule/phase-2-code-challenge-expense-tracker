import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => (
  <input
    type="text"
    placeholder="Search expenses..."
    value={searchTerm}
    onChange={(e) => onSearch(e.target.value)}
    style={{ 
        padding: '10px', 
        marginBottom: '20px', 
        width: '300px', 
         }}
  />
);

export default SearchBar;
