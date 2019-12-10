import React from 'react'
import './estilos/Tarjeta.css'
import circulos from '../imagenes/circulos.png';
import Vacio from '../imagenes/vacio.png'

export default class Tarjeta extends React.Component {
    
    render() {
        const { titulo, descripcion, img, colorIzquierdo, colorDerecho } = this.props;

        return (
            <div className="card mx-auto Fitness-Card" style={{
                backgroundImage: `url(${circulos}), linear-gradient(to right, ${colorIzquierdo || '#134E5E'}, ${colorDerecho || '#71B280'})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || Vacio} alt="" className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{titulo}</h1>
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
