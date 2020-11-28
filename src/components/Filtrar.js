import React from 'react';
import './styles/Filtrar.css';
import search from '../images/search-black.png';
import order from '../images/orden.png';
import filter from '../images/filtrar.png';

class Filtrar extends React.Component{

    render(){
        return(
            <div className="container Filtrar">
                <div className="row justify-content-end col-12">
                    <div className="row col-7 justify-content-around">
                            <div className="Button-filter-2">
                                <a  href=""><img className= "Filtrar-icon" src={filter} alt=">"/> Filtar (1)</a>
                            </div>
                            <div className="Button-filter">
                               <a href=""><img className= "Filtrar-icon" src={order} alt=">"/> Ordenar</a>
                            </div>

                            <div className="form-froup">
                                <label htmlFor=""><img className= "Filtrar-icon" src={search} alt=">"/> </label>
                                <input type="text" className="input-search fuente" placeholder="Busca tu curso preferido"/>
                            </div>
                    </div>                    
                </div>
            </div>
            
        );
    }

}

export default Filtrar;