import React,{ useReducer } from 'react';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';
import authReducer from './authReducer';
import AuthContext from './authContext';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //funciones

    const agregarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/users', datos);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            usuarioAutenticado();
        } catch (error) {
            console.log(error.response);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert alert-warning'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');

            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert alert-warning'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    //inciar sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })

            usuarioAutenticado();
        } catch (error) {
            console.log(error.response);

            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert alert-warning'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            });
        }
    }

    //cerrar sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }
    return(
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            agregarUsuario,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion
        }}>
            {props.children}
        </AuthContext.Provider>


    );

}

export default AuthState;