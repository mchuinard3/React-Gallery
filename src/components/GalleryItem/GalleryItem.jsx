import React, { useEffect, useState } from 'react';

function GalleryItem({gallery, updateImage}) {

    

    const handleLike = () => {
        console.log('liked')
        
        updateImage(gallery)
    }

    return(
        
        <div>
        <img className="pictures" src={gallery.path} />
        <p> {gallery.likes} people like this</p>
        <button onClick={handleLike}>Like</button>
        </div>
        
    );
}

export default GalleryItem;