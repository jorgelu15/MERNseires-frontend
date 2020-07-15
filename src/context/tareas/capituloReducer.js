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

export default(state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            localStorage.setItem('capitulo', JSON.stringify(action.payload))
            return {
                ...state,
                capitulosAnime: action.payload
            }
        case OBTENER_TAREAS:
            return {
                ...state,
                capitulosAnime: action.payload,
            }
        case OBTENER_CAPITULO:
            localStorage.setItem('capituloActual', JSON.stringify(action.payload));
            return {
                ...state,
                capituloActual: action.payload
            }
        case OBTENER_CAPITULO_ACTUAL:
            return {
                ...state,
                capituloActual: action.payload
            }
        case AGREGAR_TAREAS:
            return {
                ...state,
                capitulosAnime: [...state.capitulosAnime, action.payload.capitulo],
                errorCapitulo: false
            }
        case VALIDAR_TAREAS:
            return {
                ...state,
                errorCapitulo: true
            }
        case ELIMINAR_TAREAS: 
            return{
                ...state,
                capitulosAnime: state.capitulosAnime.filter( capitulo => capitulo._id !== action.payload)
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                capituloSeleccionado: action.payload
            }
        case EDITAR_TAREA: 
            return {
                ...state,
                capitulosAnime: state.capitulosAnime.map(capitulo => capitulo._id === action.payload._id ? action.payload : capitulo),
                capituloSeleccionado: null
            }
        default:
            return state;

    }
}