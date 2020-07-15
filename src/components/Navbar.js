import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-bg-dark">
                <Link className="navbar-brand" to="/">WebAnime </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/directorio">Directorio </Link>
                       
                    </div>
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2 busqueda" type="search" placeholder="Buscar..." aria-label="Search" />
                    </form>
                </div>
            </nav>
        </Fragment>

    );
}

export default Navbar;
