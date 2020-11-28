import React from 'react';
import CursosList from '../components/CursoList';


class Cursos extends React.Component{
    
    render(){
        return(
            <section className="container">
               {/*  pdentro de este contendor iran todos los cursos disponibles*/}
                <CursosList />
            </section>
        );
    }
}

export default Cursos;