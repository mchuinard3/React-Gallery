import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateImage }) { // This component de-structures galleryList and updateImage out of 
    // props, then it loops through the galleryList, which now contains the galleryItems array 
    console.log(galleryList);
    return (
        <>
            {galleryList.map(gallery =>
            (<GalleryItem
                key={gallery.id}
                gallery={gallery}
                updateImage={updateImage}
            />)
            )}
        </>
    );
}

export default GalleryList;