import React, { Fragment, useContext, useEffect } from 'react';
import CapituloContext from '../../context/tareas/capituloContext';
const Video = () => {

    //obtener el context para capitulos
    const capitulosContext = useContext(CapituloContext);
    const { capituloActual, obtenerCapituloSeccionado, animeCapitulosSelecto } = capitulosContext;

    //Ob
    useEffect(() => {
        animeCapitulosSelecto();
        obtenerCapituloSeccionado();
        // eslint-disable-next-line
    }, []);

    if(!capituloActual) return null;
    



    return (
        <Fragment>
            <div className="canal">
                <iframe src={capituloActual.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </Fragment>
    );
}

export default Video;