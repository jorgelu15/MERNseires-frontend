import React, { Fragment } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/estilos.css';
import Principal from './components/principal/Principal';
import Directorio from './components/directorio';
import Login from './components/login';
import Serie from './components/serie/serie';
import Animes from './components/animes/animes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/register';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import AnimeState from './context/proyecto/animeState';
import CapituloState from './context/tareas/capituloState';
import RutaPrivada from './components/rutas/RutaPrivada';
import Capitulo from './components/episodio/capitulo';

function App() {
    return (
        <Fragment>
            <AlertaState>
                <AuthState>
                    <AnimeState>
                        <CapituloState>
                            <Router>
                                <Switch>
                                    <Route exact path="/directorio" component={Directorio} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/serie/:animeid" component={Serie} />
                                    <Route exact path="/capitulo/:capituloid" component={Capitulo} />
                                    <RutaPrivada exact path="/animes" component={Animes} />
                                    <Route exact path="/" component={Principal} />
                                </Switch>
                            </Router>
                        </CapituloState>
                    </AnimeState>
                </AuthState>
            </AlertaState>
        </Fragment>
    );
}

export default App;