import React, { Fragment, useContext } from 'react';
import Capitulo from './Capitulos';
import AnimeContext from '../../context/proyecto/animeContext';
import CapituloContext from '../../context/tareas/capituloContext';
const ListadoCapitulos = () => {

    //extraer state
    const animeContext = useContext(AnimeContext);
    const { proyecto, eliminarAnime } = animeContext;


    //obetener los capitulos
    const capitulosContext = useContext(CapituloContext);
    const { capitulosAnime } = capitulosContext;

    //si no hay proyecto seleccionado
    if (!proyecto) { return <div align="center"><br /><h2>Selecciona un Anime</h2></div>; }


    const [animeActual] = proyecto;

    return (
        <Fragment>
            <div className="col-md-12">
                <div className="listado-capitulo">
                    <h2>Anime: {animeActual.nombre}</h2>

                    {capitulosAnime.length === 0
                        ? (<div align="center"><p><br />No hay capitulos</p></div>)
                        :
                            (capitulosAnime.map(capitulo =>
                                (<Capitulo
                                        key={capitulo._id}
                                        capitulo={capitulo}
                                    />)
                            ))
                    }
                </div>
            </div>
            <div className="eliminar-anime">
                <button
                    className="btn btn-dark"
                    onClick={() => eliminarAnime(animeActual._id)}
                >Eliminar Anime</button>
            </div>

        </Fragment>

    );
}

export default ListadoCapitulos;