import React from 'react';
import Filtrar from '../components/Filtrar';
import Cursos from '../components/Cursos';
import './styles/inicio.css';

class Inicio extends React.Component{

    render(){
        return( 
            <div className="">
                <Filtrar />
                <Cursos />
            </div>
            
        );
    }

}

export default Inicio;