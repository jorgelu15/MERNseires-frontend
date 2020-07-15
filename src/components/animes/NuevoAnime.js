import React, { Fragment, useState, useContext } from 'react';
import AnimeContext from '../../context/proyecto/animeContext';
const NuevoAnime = () => {

    //obtener sl state del formulario
    const animeContext = useContext(AnimeContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarAnime,
         mostrarError } = animeContext;

    //state para proyecto
    const [anime, guardarAnime] = useState({
        nombre: '',
        creador: ''
    });


    //Extraer nombre del anime
    const { nombre, creador } = anime;

    //lee los contenidos de los input
    const onChangeAnime = e => {
        guardarAnime({
            ...anime,

            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario envia un proyecto
    const onSubmitAnime = e => {
        e.preventDefault();

        //validar anime
        if(nombre === ''){
            mostrarError();
            return;
        }
        //agregar al state
        agregarAnime(anime);
        //Reiniciar el Form
        guardarAnime({
            nombre: '',
            creador: ''
        });
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-dark btn-block"
                onClick={() => mostrarFormulario()}    
            >
                Nuevo Anime
            </button>
            {
                formulario
                    ? (
                        <form
                            onSubmit={onSubmitAnime}
                            autoComplete="off"
                        >
                            <input
                                type="text"
                                className="form-border-hidden"
                                placeholder="Nombre del Anime"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeAnime}
                            />

                            <input
                                type="text"
                                className="form-border-hidden"
                                placeholder="Creador del Anime"
                                name="creador"
                                value={creador}
                                onChange={onChangeAnime}
                            />

                            <input type="submit"
                                className="btn btn-block btn-dark"
                                value="Agregar Anime"
                            />
                        </form>
                    )
                    : null
            }
            <br />
            {
                errorFormulario 
                ? (<div className="alert alert-dark" role="alert">
                Todos los campos son Obligatorios
              </div>)
                : null
            }
            <br />
        </Fragment>
    );
}

export default NuevoAnime;