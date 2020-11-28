import React from 'react';
import './styles/CursoList.css';
import user from '../images/user.png';
import star from '../images/star.png';
import carrito from '../images/carrito.png';
import play from '../images/play.png';
//importamos la el archivo json que simulara la base de datos de los cursos
import data from '../db.json';

class CursoListItem extends React.Component{
    render(){
        return(
            <div className="modelo_caja">
                <div className="galeria__columna" >
                  {/*  <a  href={`${this.props.curso.enlace}`}><img className="contenido_miniaruta  galeria__columna-play img " src={`${this.props.curso.miniatura}`} alt="Miniatura"/></a> */}
                    <a  href={`${this.props.curso.enlace}`}>
                        <img src={`${this.props.curso.miniatura}`}  className="contenido_miniaruta  galeria__columna-play img " />
                        {/* <div className="play">
                            <img  border="0" src={play}/>
                        </div> */}
                    </a>
                        
                </div>
                <div className="contenido">
                    <div className="titulo">
                        <h3> {this.props.curso.nombreCurso} </h3>
                        <p>Por: {this.props.curso.profesor} </p>
                    </div>
                    <br/> 
                    <div className="row align-self-center">
                        <div className="contenido  ">
                            <img src={user} alt="user "/>
                            <label htmlFor=""> {this.props.curso.alumnos} </label>
                        </div>
                        
                        <div className="contenido">                            
                            <img src={star} alt="user "/>
                            <label htmlFor=""> {this.props.curso.puntuacion} </label>
                        </div>
                    </div>
                    <h3>USD${this.props.curso.precio} </h3>
                    <a  className ="btn btn-primary " href=""><img className= "Navbar-button" src={carrito} alt=">"/>Agregar al carrito</a>         
                </div>
            </div>
        );
    }
}

class CursoList extends React.Component{
    render(){
        return(
            <div className ="contenedor">               
                {//habiendo importado la bd se mapean los datos para cada curso en CursoItem
                    data.map(curso =>{
                        return(
                            <article key= {curso.id}>
                                <CursoListItem curso = {curso}/>
                            </article>
                        );
                    })
                }                
            </div>
        );
    }
}

export default CursoList;