// favoritesManager.js
import { useState } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (name) => {
    setFavorites((prevFavorites) => [...prevFavorites, name]);
  };

  return { favorites, addToFavorites };
};

export default useFavorites;
