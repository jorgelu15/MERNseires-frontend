import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CapitulosContext from '../../context/tareas/capituloContext';
import AnimeContext from '../../context/proyecto/animeContext';
const ListaCapitulos = () => {

    const animeContext = useContext(AnimeContext);
    const { proyecto } = animeContext;

    const capitulosContext = useContext(CapitulosContext);
    const { capitulosAnime, obtenerTodosCapitulos, capituloSelect } = capitulosContext;
    //const [obtenerAnimeNombre] = proyecto;
    useEffect(() => {
        obtenerTodosCapitulos(proyecto);
    }, []);

    const seleccion = capitulo => {
        capituloSelect(capitulo)
    }

    return (
        <Fragment>
            <h1></h1>
            {capitulosAnime.map(capitulo =>
                (<li 
                    className="list-cap-item"
                    key={capitulo._id}    
                >
                    <Link
                        to={'/capitulo/'+capitulo.nombre}
                        onClick={() => seleccion(capitulo)}
                    >{capitulo.nombre}</Link></li>
                )
            )}
        </Fragment>
    );
}

export default ListaCapitulos;