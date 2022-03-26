// destructuring galleryList OUT OF PROPS
import GalleryItem from '../GalleryItem/GalleryItem';
function GalleryList({galleryList, updateImage}) {
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