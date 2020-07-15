import React, { useContext, useState, useEffect } from 'react';
import AnimeContext from '../../context/proyecto/animeContext';
import CapituloContext from '../../context/tareas/capituloContext';
const FormCapitulo = () => {

    const animeContext = useContext(AnimeContext);

    const { proyecto } = animeContext;

    //obetener la funcion context de capitulos
    const capitulosContext = useContext(CapituloContext);
    const { capituloSeleccionado, errorCapitulo, agregarCapitulo, validarAnime, obtenerCapitulos, editarCapitulo } = capitulosContext;

    //effect que detecta si hay un capitulo seleccionado
    useEffect(() => {
        if (capituloSeleccionado !== null) {
            guardarCapitulo(capituloSeleccionado);
        } else {
            guardarCapitulo({
                nombre: '',
                video: ''
            });
        }
    }, [capituloSeleccionado]);

    //state del formulario
    const [capitulo, guardarCapitulo] = useState({
        nombre: '',
        video: ''
    });

    //leer valores del formularo
    const handleChange = (e) => {
        guardarCapitulo({
            ...capitulo,
            [e.target.name]: e.target.value
        });
    };

    const { nombre, video } = capitulo;

    if (!proyecto) return null;

    const [animeActual] = proyecto;

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if (nombre.trim() === '' ||
            video.trim() === '') {
            validarAnime();
            return;
        }

        
        //si es edicion o si es nuevo capitulo
        if (capituloSeleccionado === null) {
            //tarea nueva
            //agregar tarea
            capitulo.anime = animeActual._id;
            agregarCapitulo(capitulo);
        } else {
            //edita el capitulo
            editarCapitulo(capitulo);
        }



        //obtener y filtrar los capitulos del proyecto
        obtenerCapitulos(animeActual._id);


        //reiniciar el formulario
        guardarCapitulo({
            nombre: '',
            video: ''
        });
    }
    return (
        <div className="bg-form">
            <div className="agregar-capitulo col-md-12 ">
                <form
                    className="form-anime"
                    onSubmit={onSubmit}
                    autoComplete="off"
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nuevo Capitulo..."
                            name="nombre"
                            onChange={handleChange}
                            value={nombre}
                        />
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Url del video"
                            name="video"
                            onChange={handleChange}
                            value={video}
                        />
                        <br />
                        <input
                            type="submit"
                            className="btn btn-block btn-dark"
                            value={capituloSeleccionado ? 'Editar capitulo' : 'Añadir Capitulo'}
                        />
                    </div>
                </form>
                {
                    errorCapitulo ?
                        (<div align="center" className="alert alert-dark">
                            <p>Todos los campos son obligatorios</p>
                        </div>)
                        : null
                }
            </div>
        </div>
    );
}

export default FormCapitulo;