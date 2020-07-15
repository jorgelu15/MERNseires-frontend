import React, { Fragment, useContext, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
import AnimeContext from '../../context/proyecto/animeContext';
import ListaCapitulos from './ListaCapitulos';

const Serie = () => {
    const animeContext = useContext(AnimeContext);
    const { proyecto, obtenerTodosAnime, animeSelecto } = animeContext;
    
    useEffect(() => {
        obtenerTodosAnime();
        animeSelecto();
        // eslint-disable-next-line
    }, []);
    
    if(!proyecto) return null;


    
    return (
        <Fragment>
            <Navbar />
            <article className="anime-single">
                <div className="container mt-3 mb-3">
                    <div className="row">
                        <aside className="col-md-2">
                            <div className="thumb">
                                <figure>
                                    <img src="https://tioanime.com/uploads/portadas/7.jpg" alt="imagen" />
                                </figure>

                            </div>
                            <div to="/" className="btn btn-dark btn-block">En emision</div>
                        </aside>
                        <aside className="col-md-10">
                            <header><p className="title-anime">{proyecto.nombre}</p></header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </aside>


                    </div>
                </div>
                <figure className="backdrop">
                    <img src="https://tioanime.com/uploads/fondos/3259.jpg" alt="imagen" />
                </figure>
            </article>
            <div className="container">
                <div className="scrolling bg-color col-md-8">
                    <ul className="list-cap">
                        <ListaCapitulos />
                    </ul>
                </div>
                <div className="fb">
                    <div className="fb-comments" data-href="http://localhost:3000/serie" data-colorscheme="dark" data-numposts="10" data-width="750"></div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <Footer />
        </Fragment >
    );
}

export default Serie;