import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <Fragment>
            <div className="col-md-3 d-none d-sm-block">
                <h3>En emision</h3>
                <ul className="list-group list-group-flush ">
                    <Link className="list-group-item background-dark" to="/serie">Cras justo odio</Link>
                    <Link className="list-group-item background-dark" to="/serie">Dapibus ac facilisis in</Link>
                    <Link className="list-group-item background-dark" to="/serie">Cras justo odio</Link>
                    <Link className="list-group-item background-dark" to="/serie">Dapibus ac facilisis in</Link>
                    <Link className="list-group-item background-dark" to="/serie">Cras justo odio</Link>
                    <Link className="list-group-item background-dark" to="/serie">Dapibus ac facilisis in</Link>
                    <Link className="list-group-item background-dark" to="/serie">Cras justo odio</Link>
                    <Link className="list-group-item background-dark" to="/serie">Dapibus ac facilisis in</Link>
                    <Link className="list-group-item background-dark" to="/serie">Cras justo odio</Link>
                    <Link className="list-group-item background-dark" to="/serie">Dapibus ac facilisis in</Link>
                    <Link className="list-group-item background-dark" to="/serie">Cras justo odio</Link>
                    <Link className="list-group-item background-dark" to="/serie">Dapibus ac facilisis in</Link>                   
                </ul>
            </div>
        </Fragment>
    );
}

export default Sidebar;