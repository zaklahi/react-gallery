import React, { useState } from 'react';

function GalleryItem({pic}){
const [itsSwapped, setIsSwapped] = useState(true);

    const togglePic = () => {
        console.log('clicked a TOGGLE button');
        // set state
        setIsSwapped(!itsSwapped)

    }

    const renderPic = () => {
        if (itsSwapped) {
            // need to return JSX
            return <p>ON DUTY</p>;
        } else {
            // need to return JSX
            return <p>SLEEPING</p>;
        }
    }

return(
    <>
    
<div>
<h2>HIIII</h2>

{ renderPic()}

<button onClick={renderPic}>Toggle Alias</button>

<img src={pic.path}/>
</div>

</>
)






}

export default GalleryItem;