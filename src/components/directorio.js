import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
const Directorio = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-12">
                        <div id="principal">
                            <div className="row row-cols-1 row-cols-md-4">
                                <Link to="/serie">
                                    <div className="col mb-4">
                                        <div className="card h-100 background-dark">
                                            <img src="https://animeflv.net/uploads/animes/covers/3316.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/serie">
                                    <div className="col mb-4">
                                        <div className="card h-100 background-dark">
                                            <img src="https://animeflv.net/uploads/animes/covers/3316.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/serie">
                                    <div className="col mb-4">
                                        <div className="card h-100 background-dark">
                                            <img src="https://animeflv.net/uploads/animes/covers/3316.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/serie">
                                    <div className="col mb-4">
                                        <div className="card h-100 background-dark">
                                            <img src="https://animeflv.net/uploads/animes/covers/3316.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/serie">
                                    <div className="col mb-4">
                                        <div className="card h-100 background-dark">
                                            <img src="https://animeflv.net/uploads/animes/covers/3316.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
export default Directorio;