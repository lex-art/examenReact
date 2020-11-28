/* Una Aplicación como esta, es casi segurgo que va a tener más de una "página"
es por eso que se deja lista con react router dom, para cuando se requiere agregar
mas "páginas" solo sera cuestion de agregar la ruta*/
import  React from 'react';
//para usar estas librerias tenemos que instalar react-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//importamos la base de la página que en este caso solo sera el Navbar
import Layout from './Layout';
import Inicio from '../pages/Inicio';

//aqui colocaremos todas las rutas de aplicacion
function App() {
    return(
        //BrowserRouter solo tiene que tener un child por eso lo hacemos de esta manera
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* Aqui se iran agreegando las rutas necesarias */}
                    <Route exact path="/" component={Inicio} />
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default App;