import React, { Fragment, useState, useContext, useEffect } from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import AlertaContext from '../context/alertas/alertaContext';
import AuthContext from '../context/autenticacion/authContext';

const Register = (props) => {
    //extraer los valoresd del context
    const alertaContext = useContext(AlertaContext);

    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);


    const { agregarUsuario, mensaje, autenticado } = authContext;

    //en caso de que el usuario se haya autenticado o registrado o sea un registro
    //duplicado
    useEffect(() => {
        if (autenticado) {
            props.history.push('/animes');
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);



    const [user, saveUser] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios
        if (nombre.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alert alert-warning');
            return;
        }

        //password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('Las contraseña debe ser de minimo 6 caracteres', 'alert alert-warning');
            return;
        }

        //Los 2 password no son iguales
        if (password !== confirmar) {
            mostrarAlerta('Las contraseñas no son igaules', 'alert alert-warning');
            return;
        }

        //Pasarlo al action
        agregarUsuario({
            nombre,
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
                                    <form onSubmit={onSubmit}>
                                        <label>Nombre</label>
                                        <input type="text" value={nombre} className="form-control" placeholder="Nombre" name="nombre" onChange={onChange} />
                                        <br />
                                        <label>Email</label>
                                        <input type="text" value={email} className="form-control" placeholder="Correo" name="email" onChange={onChange} />
                                        <br />
                                        <label>Contraseña</label>
                                        <input type="password" value={password} className="form-control" placeholder="Contraseña" name="password" onChange={onChange} />
                                        <br />
                                        <label>Repite la Contraseña</label>
                                        <input type="password" value={confirmar} className="form-control" placeholder="Repite la Contraseña" name="confirmar" onChange={onChange} />
                                        <br />
                                        <input type="submit" className="btn btn-primary btn-block" value="Registrarse" />
                                    </form>
                                    <br />
                                    {alerta ? (<div className={alerta.categoria}>{alerta.msg}</div>) : null}
                                    <hr />
                                    <Link to="/login" className="btn btn-success btn-block">Iniciar sesion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Register;