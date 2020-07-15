import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Capitulo = () => {
    return (
        <Fragment>
            <li className="list-cap-item"><Link to="/capitulos">Naruto capitulo 2</Link></li>
        </Fragment>
    );
}

export default Capitulo;