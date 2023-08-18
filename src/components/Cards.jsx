import React, { useState, useEffect } from 'react';
import './Cards.css';
import Filter from './Filter';
import SearchBar from './SearchBar';

const pixabaykey = '38868562-adec963570753e3066ded863e';  

function RoundedCard({ image, title, views, likes, downloads, tag }) {
  return (
    <div className="rounded-card">
      <img src={image} alt={title} className="card-image" />
      <div className="text-wrap">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">Views: {views}</p>
      <p className="card-description">Likes: {likes}</p>
      <p className="card-description">Downloads: {downloads}</p>
      <div className="card-tag">{tag}</div>
      </div>
      
    </div>
  );
}

function Cards() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('views');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${pixabaykey}&q=${searchTerm}&image_type=photo&order=${filter}&pretty=true`)
      .then(response => response.json())
      .then(json => {
        if (json.hits.length === 0) {
          alert('No images found for the search term.');
        }
        setData(json.hits);
      })
      .catch(error => console.error(error));
  }, [searchTerm, filter]);

  return (
    <div className="cards-container">
      <div className="filter-search-container">
        <Filter filter={filter} setFilter={setFilter} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="card-grid">
        {data.map((item, index) => (
          <RoundedCard
            key={index}
            image={item.webformatURL}
            title={item.tags}
            views={item.views}
            likes={item.likes}
            downloads={item.downloads}
            tag={<a href={item.pageURL}>Pixabay Link</a>}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
