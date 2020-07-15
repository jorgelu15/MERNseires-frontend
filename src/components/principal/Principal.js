import React, { Fragment, useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../sidebar';
import Footer from '../footer';
import CapitulosPost from './CapitulosPost';
import PrincipalAnimes from './PrincipalAnimes'

const Principal = () => {

    return (
        <Fragment>
            <Navbar />

            <div className="container mt-3 mb-3">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9">
                        <h3>Ultimos</h3>
                        <div id="principal">
                            <CapitulosPost />
                        </div>
                        <hr />
                        <h3>Animes Subidos</h3>
                        <div id="principal">
                            <div className="row row-cols-1 row-cols-md-3"></div>
                            <PrincipalAnimes />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment >
    );
}
export default Principal;