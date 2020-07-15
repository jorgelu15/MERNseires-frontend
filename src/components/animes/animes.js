import React, { Fragment, useContext, useEffect } from 'react';
import Sidebar from '../layout/sidebar';
import Barra from '../layout/barra';
import FormCapitulo from '../capitulos/FormCapitulo';
import ListadoCapitulos from '../capitulos/ListadoCapitulos';
import AuthContext from '../../context/autenticacion/authContext';
import tokenAuth from '../../config/tokenAuth';
//revisa si hay token
const token = localStorage.getItem('token');
if(token) {
    tokenAuth(token);
}
const Animes = () => {


    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10">
                        <Barra />
                        <main>
                            <FormCapitulo />
                            <ListadoCapitulos />
                        </main>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Animes;
