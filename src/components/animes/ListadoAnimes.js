import React, { useContext, useEffect } from 'react';
import Anime from './anime';
import AnimeContext from '../../context/proyecto/animeContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ListadoAnimes = () => {
    //extrayendo proyectos
    const animeContext = useContext(AnimeContext);
    const { animes, obtenerAnime } = animeContext;
    
    useEffect(() => {
        obtenerAnime();
        // eslint-disable-next-line
    }, []);

    if (animes.length === 0) return <p><br />No hay animes, comienza creando uno</p>;
    
    return (
        <ul className="list-anime scrolling">
            <TransitionGroup>
                {animes.map(anime => (
                    <CSSTransition
                        key={anime._id}
                        timeout={200}
                        classNames="anime"
                    >
                        <Anime
                            anime={anime}
                        />
                    </CSSTransition>
                )
                )}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoAnimes;