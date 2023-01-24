import React, { useState } from 'react';

function GalleryItem({pic, updateGallery}){
const [itsSwapped, setIsSwapped] = useState(true);

    const togglePic = () => {
        console.log('clicked a TOGGLE button');
        // set state
        setIsSwapped(!itsSwapped)

    }

    const renderPic = () => {
        if (itsSwapped) {
            // need to return JSX
            return <img src={pic.path}></img>
            
        } else {
            // need to return JSX
            return <p>{pic.description}/</p>;
        }
    }

    const addLike = () => {
        updateGallery(pic.id)

    }

return(
    <>
    
<div>
<h2></h2>
<ul onClick={togglePic}>
    {renderPic()}
</ul>
♡{pic.likes}
<button onClick={addLike}>Like</button>

</div>

</>
)

}

export default GalleryItem;