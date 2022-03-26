import React, { useEffect, useState } from 'react';

function GalleryItem({gallery, updateImage}) {

    const [like, setLike] = useState(0);

    const handleLike = () => {
        console.log('liked')
        // updateImage(gallery)
        setLike(like + 1);
    }

    return(
        <>
        
        <img className="pictures" src={gallery.path}/>
        <div> {like} people like this</div>
        <button onClick={handleLike}>Like</button>
        </>
    );
}

export default GalleryItem;