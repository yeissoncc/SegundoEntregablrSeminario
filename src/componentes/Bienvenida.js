import React from 'react'
import './estilos/Bienvenida.css'

const Bienvenida = ({usuario, mensaje}) => {
    return(
        <div className="container">
            <div className="Fitnes-User-Info">
                <h1>Bienvenido {usuario}</h1>
                <p>{mensaje}</p>
            </div>
        </div>
    )
}

export default Bienvenida;

