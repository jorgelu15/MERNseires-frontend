import React, { useReducer } from 'react';
import CapituloReducer from './capituloReducer';
import CapituloContext from './capituloContext';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREAS,
    ELIMINAR_TAREAS,
    TAREA_ACTUAL,
    EDITAR_TAREA,
    OBTENER_TAREAS,
    OBTENER_CAPITULO,
    OBTENER_CAPITULO_ACTUAL
} from '../../types';

import clienteAxios from '../../config/axios';

const CapituloState = (props) => {
    
    //agregar objeto tareas


    const initialState = {
        capitulosAnime: [],
        capituloActual: null,
        errorCapitulo: false,
        capituloSeleccionado: null
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(CapituloReducer, initialState);

    //crear las funciones


    //obtener las tareas de un proyecto
    const obtenerCapitulos = async anime => {
        try {
            const resultado = await clienteAxios.get('/api/capitulos', { params: { anime } });
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.capitulos
            });
        } catch (error) {  
            console.log(error);
        }
    }

    //obtener las tareas de un proyecto
    const obtenerTodosCapitulos = async animeId => {
        try {
            const anime = animeId._id;
            const resultado = await clienteAxios.get('/api/capitulo', { params: { anime } });
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.capitulos
            });
            animeCapitulosSelecto();
        } catch (error) {  
            console.log(error);
        }
    }

    const animeCapitulosSelecto = () => {
        const selecto = localStorage.getItem('capitulo');
        try {
            dispatch({
                type: OBTENER_TAREAS,
                payload: JSON.parse(selecto)
            });
        } catch (error) {
            
        }
    }

    const capituloSelect = capitulo => {
        try {
            dispatch({
                type: OBTENER_CAPITULO,
                payload: capitulo
            });
            obtenerCapituloSeccionado();
        } catch (error) {
            
        }
    }


    const obtenerCapituloSeccionado = () => {
        const selecto = localStorage.getItem('capituloActual');
        try {
            dispatch({
                type: OBTENER_CAPITULO_ACTUAL,
                payload: JSON.parse(selecto)
            });
        } catch (error) {
            
        }
    }

    
    //AGREGAR_TAREAS
    const agregarCapitulo = async capitulo => {
        try {
            const resultado = await clienteAxios.post('/api/capitulos', capitulo);
            dispatch({
                type: AGREGAR_TAREAS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarAnime = () => {
        dispatch({
            type: VALIDAR_TAREAS
        });
    }

    //eliminar capitulo por id
    const eliminarCapitulo = async (id, anime) => {
        try {
            await clienteAxios.delete('api/capitulos/'+id,{params: {anime}});

            dispatch({
                type: ELIMINAR_TAREAS,
                payload: id
            });
        } catch (error) {
            console.log(error)
        }
    }


    //extrae un capitulo para edicion
    const guardarCapituloActual = capitulo => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: capitulo
        });
    }

    //EDITA O MODIFICA UN CAPITULO
    const editarCapitulo = async capitulo => {
        try {
            const resultado = await clienteAxios.put('/api/capitulos/'+capitulo._id, capitulo);
            dispatch({
                type: EDITAR_TAREA,
                payload: resultado.data.capitulo
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CapituloContext.Provider value={{
            capitulosAnime: state.capitulosAnime,
            capituloActual: state.capituloActual,
            errorCapitulo: state.errorCapitulo,
            capituloSeleccionado: state.capituloSeleccionado,
            obtenerCapitulos,
            agregarCapitulo,
            validarAnime,
            eliminarCapitulo,
            guardarCapituloActual,
            editarCapitulo,
            obtenerTodosCapitulos,
            animeCapitulosSelecto,
            capituloSelect,
            obtenerCapituloSeccionado
        }}>
            {props.children}
        </CapituloContext.Provider>


    );

}

export default CapituloState;