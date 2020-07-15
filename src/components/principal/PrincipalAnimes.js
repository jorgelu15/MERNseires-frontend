import React, { Fragment, useContext, useEffect } from 'react';
import AnimeContext from '../../context/proyecto/animeContext';
import CapituloContext from '../../context/tareas/capituloContext';
import { Link } from 'react-router-dom';
const PrincipalAnimes = () => {
    const animeContext = useContext(AnimeContext);
    const { animes, obtenerTodosAnime, obtenerAnimeNombre } = animeContext;
    //obetener la funcion context de capitulos
    const capitulosContext = useContext(CapituloContext);
    const { obtenerTodosCapitulos } = capitulosContext;
    useEffect(() => {
        obtenerTodosAnime();
        // eslint-disable-next-line
    }, []);

    const seleccion = nombre => {
        obtenerAnimeNombre(nombre);
        obtenerTodosCapitulos(nombre)
    }
    return (
        <Fragment>
            {animes.length === 0 ? (<p><br />No hay animes</p>) : null}
            {animes.map(anime =>
                (
                    <Link
                        key={anime._id}
                        to={'/serie/' + anime.nombre}
                        className="btn btn-anime"
                        onClick={() => seleccion(anime)}
                    >{anime.nombre} </Link>
                )
            )}
        </Fragment>
    );
}

export default PrincipalAnimes;