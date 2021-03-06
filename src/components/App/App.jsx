import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() { // This component contains a get route for the gallery of pictures, as well as a put 
  // route for the picture likes. It also contains a return which appends the pictures and likes
  // to the DOM
  let [galleryList, setGalleryList] = useState([]);

  const getImages = () => {
    axios.get('/gallery')
      .then(response => {
        setGalleryList(response.data);
      })
      .catch(err => {
        console.log('Error in get on App side: ', err);
      })
  }
  useEffect(() => {
    getImages();
  }, []) //empty array is critical

  const updateImage = (imageToUpdate) => {
    console.log('Update from App.jsx');
    axios.put(`/gallery/like/${imageToUpdate.id}`)
      .then(response => {
        getImages();
        console.log('Updated', imageToUpdate)
      }).catch(err => {
        console.log('Error in update', err);
      })

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Photo Gallery</p>
      <main>

        {/* <div>
                    <GalleryItem getImages={getImages} />
                </div> */}

        <GalleryList
          galleryList={galleryList}
          updateImage={updateImage}
        />
      </main>
      {/* <img src="images/goat_small.jpg"/> */}
    </div>
  );
}

export default App;
