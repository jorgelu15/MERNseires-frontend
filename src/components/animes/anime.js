import React, { useContext } from 'react';
import AnimeContext from '../../context/proyecto/animeContext';
import CapituloContext from '../../context/tareas/capituloContext';
const Anime = ({ anime }) => {
    const animeContext = useContext(AnimeContext);
    const { animeActual } = animeContext;


    //obetener la funcion context de capitulos
    const capitulosContext = useContext(CapituloContext);
    const { obtenerCapitulos } = capitulosContext;

    //funcion para agregar el anime actual
    const seleccionarAnime = id => {
        animeActual(id); //fijar un anime actual
        obtenerCapitulos(id); //filtrar las tareas cuando se da click
    }




    return (
        <li className="list-anime-item">
            <button
                type="button"
                className="btn-anime"
                onClick={() => seleccionarAnime(anime._id)}
            >{anime.nombre}</button>
        </li>
    );
}

export default Anime;