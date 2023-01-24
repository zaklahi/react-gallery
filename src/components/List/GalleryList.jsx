import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({galleryListProp, updateGallery}) {
    return (
    <>
   
    <div>
    {galleryListProp.map(pic => {
            
           return  <GalleryItem
                key={pic.id}
                pic={pic} 
                updateGallery = {updateGallery}
                    />
    })}
    
    </div>
       </>   
    )
    
    }

export default GalleryList;