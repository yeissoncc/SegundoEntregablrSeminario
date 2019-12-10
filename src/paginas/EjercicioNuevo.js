import React from 'react'
import Formulario from '../componentes/Formulario'
import Tarjeta from '../componentes/Tarjeta'
import '../componentes/estilos/EjercicioNuevo.css'

export default class EjercicioNuevo extends React.Component {
    state = {
        form:  {
            titulo: '',
            descripcion: '',
            img: '',
            colorIzquierdo: '',
            colorDerecho: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleClick = (e) => {
        this.setState({
            form: {
                //Crea una copia del elemento sin alterar el original
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })   
    }

    render() {
        return (
            <div className="row ExerciseNew_Lateral_Space">
                <div className="col-sm ExerciseNew_Card_Space">
                        <Tarjeta 
                            {...this.state.form}
                        />
                    <div className="col-sm ExerciseNew_Form_Space">
                        <Formulario
                            onChange={this.handleClick}
                            onSubmit={this.handleSubmit}
                            form={this.state.form}
                        />
                    </div>
                </div>
            </div>
        )
    }
}