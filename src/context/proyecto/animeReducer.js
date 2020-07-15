import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO,
    OBTENER_PROYECTO_TODOS,
    OBTENER_PROYECTO_NOMBRE,
    OBTENER_PROYECTO_SELECTO,
    AGREGAR_PROYECTO,
    PROYECTO_ACTUAL,
    VALIDAR_FORMULARIO,
    ELIMINAR_PROYECTO
 } from '../../types';

export default(state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO: 
            return {
                ...state,
                formulario: true 
            }
        case AGREGAR_PROYECTO:
            return {
                ...state,
                animes: [...state.animes, action.payload],
                formulario: false,
                errorFormulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case OBTENER_PROYECTO_NOMBRE:
            localStorage.setItem('anime', JSON.stringify(action.payload));
            return {
                ...state,
                proyecto: state.animes.filter(proyecto => proyecto.nombre === 
                    action.payload)
            }
        case OBTENER_PROYECTO_SELECTO:
            return {
                ...state,
                proyecto: action.payload
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.animes.filter(proyecto => proyecto._id === 
                    action.payload)
            }
        case OBTENER_PROYECTO_TODOS:
        case OBTENER_PROYECTO:
            return {
                ...state,
                formulario: false,
                animes: action.payload
            }
        case ELIMINAR_PROYECTO:
            console.log(action.payload);
            return {
                ...state,
                animes: state.animes.filter(proyecto => proyecto._id !== action.payload),
                proyecto: null
            }
        default:
            return state;

    }
}