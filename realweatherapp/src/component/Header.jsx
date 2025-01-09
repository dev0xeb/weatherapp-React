import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleInputChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchCity);
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
    <header className="header">
      <div className="logo">Weather App</div>
      <nav>
        <input
          type="text"
          placeholder="Search cities..."
          value={searchCity}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        <span className='date'>{currentDate}</span>
      </nav>
    </header>
    <hr />
    </>
  );
};

export default Header;