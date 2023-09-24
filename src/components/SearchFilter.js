// SearchFilter.js
import React, { useState } from 'react';

function SearchFilter({ profiles, onFilterChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchText.toLowerCase())
    );
    onFilterChange(filteredProfiles);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchFilter;
    