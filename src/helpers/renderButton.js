import React from 'react';

const renderButton = (text, img, alt, clickEvent) => (

    <button onClick={clickEvent}>
        {text}<img src={img} alt={alt}/>
    </button>

)

export default renderButton;