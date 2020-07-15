import React, { Fragment, useContext, useEffect } from 'react';
import CapituloContext from '../../context/tareas/capituloContext';
const Opcion = () => {

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
            <div className="header">
                <p>{capituloActual.nombre}</p>
            </div>
            <div className="list-option">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <a className="nav-link">Opcion 1</a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Opcion;