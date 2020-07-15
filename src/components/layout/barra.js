import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
const Barra = () => {
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    
    return ( 
        <header className="panel-admin">
            {usuario ? 
            (<h1>Hola <span>{usuario.nombre}</span></h1>) 
            : null}
            <nav className="float-md-right">
                <button
                    className="btn-anime"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesion</button>
            </nav>
        </header>
     );
}
 
export default Barra;