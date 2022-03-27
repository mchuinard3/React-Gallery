import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, updateImage }) { // This component loops through the GalleryItem component, 
    // and it de-structures galleryList and updateImage out of props 
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