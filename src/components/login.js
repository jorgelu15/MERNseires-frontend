import React, { Fragment, useState, useContext, useEffect } from 'react';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import AlertaContext from '../context/alertas/alertaContext';
import AuthContext from '../context/autenticacion/authContext';
import Navbar from './Navbar';
const Login = (props) => {

    //extraer los valoresd del context
    const alertaContext = useContext(AlertaContext);

    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);


    const { iniciarSesion, mensaje, autenticado } = authContext;

    //en caso de que el password o usuario no exista
    useEffect(() => {
        if(autenticado) {
            props.history.push('/animes');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);



    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios
        if( email.trim() === '' || 
         password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alert alert-warning');
            return;
        }


        //pasarlo al action
        iniciarSesion({
            email,
            password
        });


    }

    return (
        <Fragment>
            <Navbar />
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <Slider />
                            <div className="col-md-3">

                                <div className="box">
                                    <form onSubmit={onSubmit} >
                                        <label>Email</label>
                                        <input type="text" value={email} className="form-control" placeholder="Correo" name="email" onChange={onChange} />
                                        <br />
                                        <label>Contraseña</label>
                                        <input type="password" value={password} className="form-control" placeholder="Contraseña" name="password" onChange={onChange} />
                                        <br />
                                        <input type="submit" className="btn btn-success btn-block" value="Iniciar sesion" />
                                    </form>
                                    <br />
                                    {alerta ? (<div className={alerta.categoria}>{alerta.msg}</div>) : null}
                                    <hr />
                                    <Link className="btn btn-primary btn-block" to="/register">Registrarse</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default Login;