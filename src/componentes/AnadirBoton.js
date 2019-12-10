import React from 'react'
import './estilos/AnadirBoton.css'
import BotonAnadir from '../imagenes/AnadirBoton.png'
import {Link} from 'react-router-dom'

const AnadirBoton = () => (
    <Link to="/ejercicios/nuevo">
        <img src={BotonAnadir} className="Fitness-Add" alt=""/>
    </Link>
)

export default AnadirBoton