import React from 'react';
import './styles/Navbar.css';
import arrow from '../images/arrow.png';
import search from '../images/search.png';
import carrito from '../images/carrito.png';
import Cronometro from '../components/Cronometro';
//diseño del navbar que va a estar en toda la página, que la vamos a implementar en el layout como 
//base de la página
class Navbar extends React.Component{
    render(){
        return(
            <div className = "Navbar img col-12">

                <div className="container ">
                    <div className="row">
                        <div className = "d-flex flex-row col-6 Navbar-option" >          
                            <samp className="Navbar-logo">crehana</samp>
                            
                                <a className ="Navbar-lista" href="">Aprende 
                                    <img className= "Navbar-button" src={arrow} alt=">"/>     
                                </a>
                                
                                <a className ="Navbar-lista" href=""><img className= "Navbar-button" src={search} alt=">"/> </a>

                            <div className="col-3"></div>
                                                            
                        </div>

                        <div className = "d-flex flex-row col-6 Navbar-option "> 
                            <div className="col-3"></div>
                            
                            <a className ="Navbar-lista " href=""><img className= "Navbar-button" src={carrito} alt=">"/></a>         
                            
                            <a className ="Navbar-lista" href="">Ingresar  </a>
                            
                            <a className ="Navbar-lista Navbar-border" href="">Registrate</a>
                                  
                        </div>
                    </div>
                </div>

                <div className="contenido-nav">
                    <div className="align-items-center justify-content-center hv-100 ">
                        <div className="text-center" >
                            <h2>Adelántate al Black Friday ¡desde hoy!</h2>
                            <p>Tiene 4 Cursos A US$24</p>

                            <div className="text-center caja-reloj ">    
                                    <p>LA OFERTA TERMINA EN:</p>
                                   <Cronometro/>                            
                                <div className="row justify-content-around caja-reloj-contenedor">
                                    <p>DIAS</p> 
                                    <p>HRS</p> 
                                    <p>MIN</p> 
                                    <p>SEG</p> 
                                </div>
                                
                            </div> 
                        </div>                        
                        
                        
                    </div> 
                           
                </div>
                 
            </div> 
            );
    }
}

export default Navbar;