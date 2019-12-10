import React from 'react'
import errorImg from '../imagenes/404.png'
import '../componentes/estilos/Errores.css'

const NoEncontrado = () => {
    return (
        <div className="text-center">
            <h1 className="Error_Text">Error: 404 no encontrado</h1>
            <img src={errorImg} alt="" className="Error_Image"/>
        </div>
    )
}

export default NoEncontrado