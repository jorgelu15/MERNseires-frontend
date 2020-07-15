import React, { useReducer } from 'react';
import AnimeReducer from './animeReducer';
import AnimeContext from './animeContext';

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO,
    OBTENER_PROYECTO_TODOS,
    OBTENER_PROYECTO_NOMBRE,
    OBTENER_PROYECTO_SELECTO,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

import clienteAxios from '../../config/axios';
const AnimeState = (props) => {
    const initialState = {
        animes: [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    };

    const [state, dispatch] = useReducer(AnimeReducer, initialState);

    //funciones


    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    const obtenerAnime = async () => {
        try {
            const respuesta = await clienteAxios.get('/api/proyectos');
            
            dispatch({
                type: OBTENER_PROYECTO,
                payload: respuesta.data.proyectos
            });
        } catch (error) {
            console.log(error.response);

        }
    }

    const obtenerTodosAnime = async () => {
        try {
            const respuesta = await clienteAxios.get('/api/proyectosTodos');
            dispatch({
                type: OBTENER_PROYECTO_TODOS,
                payload: respuesta.data.proyectos
            });
        } catch (error) {
            console.log(error);

        }
    }

    

    const agregarAnime = async anime => {
        try {
            const respuesta = await clienteAxios.post('/api/proyectos', anime);
            //console.log(respuesta);
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: respuesta.data//anime
            });
        } catch (error) {
            console.log(error);
        }
    }

    //cuando el usuario inicia sesion

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    const obtenerAnimeNombre = nombre => {
        try {
            dispatch({
                type: OBTENER_PROYECTO_NOMBRE,
                payload: nombre
            });
            animeSelecto();
        } catch (error) {
            console.log(error)
        }
    }

    const animeSelecto = () => {
        const selecto = localStorage.getItem('anime');

        try {
            dispatch({
                type: OBTENER_PROYECTO_SELECTO,
                payload: JSON.parse(selecto)
            });
        } catch (error) {
            
        }
    }

    //SELECCIONA EL PROYECTO QUE EL USUARIO DIO CLICK
    const animeActual = animeId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: animeId
        });
    }

    const eliminarAnime = async animeId => {
        try {
            await clienteAxios.delete('/api/proyectos/'+animeId);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: animeId
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AnimeContext.Provider value={{
            animes: state.animes,
            formulario: state.formulario,
            errorFormulario: state.errorFormulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            agregarAnime,
            obtenerAnime,
            mostrarError,
            animeActual,
            eliminarAnime,
            obtenerTodosAnime,
            obtenerAnimeNombre,
            animeSelecto



        }}>
            {props.children}
        </AnimeContext.Provider>


    );

}

export default AnimeState;