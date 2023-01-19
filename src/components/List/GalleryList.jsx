function GalleryList({galleryListProp}){


    return (
        <>
        
        <p>Gallery LIST</p>
        <ul>
        {galleryListProp.map(gallery => 
         (<li 
            key={gallery.id}>
                {gallery.name}</li>)
        )}
       </ul>
    
        </>
    )

  
}

export default GalleryList;