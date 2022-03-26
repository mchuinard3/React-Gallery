import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';



function App() {
  
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
useEffect( () => {
  getImages();
}, []) //empty array is critical

const updateImage = (imageToUpdate) => {
  console.log('Update from App.jsx');
  axios.put(`/list/${imageToUpdate.id}`)
      .then(response => {
          //retrieves updated item list:
          getImage();
          console.log('Updated', itemToUpdate)
      }).catch(err => {
          console.log('Error in update', err);
      })

}


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <main>
                
                {/* <div>
                    <GalleryItem getImages={getImages} />
                </div> */}

                <GalleryList
                    galleryList={galleryList}
                    
                    updateImage={updateImage}
                />
            </main>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
