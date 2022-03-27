import { useState, useEffect } from 'react';

function GalleryItem({ gallery, updateImage }) {

    const [showGallery, setShowGallery] = useState(false);

    const handleLike = () => {
        console.log('liked')

        updateImage(gallery)
    }

    const handleGallery = () => {

        console.log('clicked');
        setShowGallery(!showGallery)
    }
    return (
        <>
        <div onClick={handleGallery}>

            {showGallery ? <p>{gallery.description}</p> : <img className="pictures" src={gallery.path} />}
        </div>



        <div>

            <p> {gallery.likes} people like this</p>
            
        </div>

        <div>
        <button onClick={handleLike}>Like</button>
        </div>
        </>
    );
}

export default GalleryItem;