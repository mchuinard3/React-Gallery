import React, { useEffect, useState } from 'react';

function GalleryItem({gallery, updateImage}) {

    const [like, setLike] = useState(0);

    const handleLike = () => {
        console.log('liked')
        // updateImage(gallery)
        setLike(like + 1);
    }

    return(
        
        <div>
        <img className="pictures" src={gallery.path} />
        <p> {like} people like this</p>
        <button onClick={handleLike}>Like</button>
        </div>
        
    );
}

export default GalleryItem;