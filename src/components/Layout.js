import React from 'react';
//importamos el navbar para la base de la pagina segun el diseño
import Navbar from './Navbar';

//como este elemento va a ser estático por eso use function, lo unico que va a cambiar es el props
function Layout(props) {
        return(
            //Reac fragment es para decir que va a devolver más de un componente, cuando solo se devueve
            // un children, como aquí solo se espera que se devuelva un componente
            <React.Fragment>
                <Navbar />
                {props.children}
            </React.Fragment>

        );
}

export default Layout;
