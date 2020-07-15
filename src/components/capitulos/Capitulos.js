import React, {Fragment, useContext} from 'react';
import AnimeContext from '../../context/proyecto/animeContext';
import CapituloContext from '../../context/tareas/capituloContext';
const Capitulo = ({capitulo}) => {
    
    //extraer state
    const animeContext = useContext(AnimeContext);
    const { proyecto } = animeContext;

    //obetener los capitulos
    const capitulosContext = useContext(CapituloContext);
    const { eliminarCapitulo, obtenerCapitulos, guardarCapituloActual } = capitulosContext;

    //extraer el proyecto
    const [animeActual] = proyecto;

    //funcion que se ejecuta cuando se presiona eliminar capitulo
    const handleEliminar = id => {
        eliminarCapitulo(id, animeActual._id);
        obtenerCapitulos(animeActual._id);
    }

    const seleccionarCapitulo = capitulo => {
        guardarCapituloActual(capitulo);
    }
    return ( 
        <Fragment>
            <div className="box-cap">
                <span>{capitulo.nombre}</span>
                <button 
                    className="btn btn-danger"
                    onClick={() => handleEliminar(capitulo._id)}
                >
                    Eliminar
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={() => seleccionarCapitulo(capitulo)}
                >
                    Editar
                </button>
                
            </div>
            
        </Fragment>
     );
}
 
export default Capitulo;