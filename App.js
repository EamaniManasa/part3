// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://dog.ceo/api/breeds/image/random/5';

    // Make an HTTP GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setDogImages(response.data.message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Axios Example 3 - Random Dog Images</h1>
      <div className="dog-images">
        {dogImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={Dog ${index + 1}} />
        ))}
      </div>
    </div>
  );
};

export default App;