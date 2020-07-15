import React, { Fragment, useContext } from 'react';
import Navbar from '../Navbar';
import Opcion from './Opcion';
import Video from './video';
import Footer from '../footer';
const Capitulo = () => {


    return (
        <Fragment>
            <Navbar />
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-8">
                        <Opcion />
                        <Video />
                    </div>
                    <div className="col-md-4 ">
                        <br /><br /><br />
                        <div className="comentarios">
                            <div className="box-comentarios">
                                <div className="fb-comments" data-href="http://localhost:3000/capitulo" data-colorscheme="dark" data-numposts="10" data-width="750"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Capitulo;