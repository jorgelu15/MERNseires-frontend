import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const CapitulosPost = () => {
    return (
        <Fragment>
            <div className="row row-cols-1 row-cols-md-3">
                <Link to="/capitulos">
                    nombre
                </Link>
            </div>
        </Fragment>
    );
}

export default CapitulosPost;