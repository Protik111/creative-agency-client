import React from 'react';
import photoNot from '../NotFound/notFound.gif';

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%', height: '580px'}} class="img-fluid rounded mx-auto d-block" src={photoNot} alt=""/>
        </div>
    );
};

export default NotFound;