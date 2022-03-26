function GalleryItem({gallery}) {
    return(
        <>
        <img className="pictures" src={gallery.path}/>
        </>
    );
}

export default GalleryItem;