import { useState } from 'react';

function GalleryItem({ gallery, updateImage }) { // This component adds a like to each picture on the DOM
    // each time the picture is liked. It also makes it so each time the picture is clicked on, a description
    // of the picture will display on the DOM. Then, when the description text is clicked on, the picture 
    // will show back up on the DOM. 

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