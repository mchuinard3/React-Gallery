// destructuring galleryList OUT OF PROPS
import GalleryItem from '../GalleryItem/GalleryItem';
function GalleryList({galleryList, updateItem}) {
    console.log(galleryList);
    return (
        <>
            
                {galleryList.map(gallery =>
                (<GalleryItem
                    key={gallery.id}
                    gallery={gallery}
                />)
                )}
            
        </>
    );
}

export default GalleryList;