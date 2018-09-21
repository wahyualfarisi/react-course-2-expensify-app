import React from 'react';
import {Link} from 'react-router-dom';


const errorPage = () => {
    return (
        <div>
            404! <Link to="/" >Go Home</Link>
        </div>
    )
}


export default errorPage;