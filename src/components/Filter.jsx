import React from 'react';
import './Cards.css';

function Filter({ filter, setFilter }) {
  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="filter-container">
      <button
        className={`filter-button ${filter === 'views' ? 'active' : ''}`}
        onClick={() => handleFilterClick('views')}
      >
        Top Views
      </button>
      <button
        className={`filter-button ${filter === 'downloads' ? 'active' : ''}`}
        onClick={() => handleFilterClick('downloads')}
      >
        Top Downloads
      </button>
      <button
        className={`filter-button ${filter === 'likes' ? 'active' : ''}`}
        onClick={() => handleFilterClick('likes')}
      >
        Most Likes
      </button>
    </div>
  );
}

export default Filter;
