import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import List from '../List/GalleryList';
function App() {
   
  
  const [galleryList, setGalleryList] = useState([]);
  
  
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

const updateGallery = (id) => {
  axios ({
  method: 'PUT',
  url: `./gallery/like/${id}`
  })

  .then((response) => {
    console.log(response)
    getGallery();
})
.catch((error) => {
  console.log('Error in PUT updating', error);
})

};
  

useEffect( () => {
    getGallery();
  }, [])
  
  
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery</h1>
        </header>
        <List galleryListProp = {galleryList}
        updateGallery = {updateGallery}/>
      </div>
    );
}

export default App;
