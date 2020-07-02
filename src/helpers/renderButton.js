import React from 'react';

const renderButton = (text, img, clickEvent) => (

    <button onClick={clickEvent}>
        {text}<img src={img}/>
    </button>

)

export default renderButton;