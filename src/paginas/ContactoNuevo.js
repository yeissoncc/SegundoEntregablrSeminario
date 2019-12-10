import React from 'react'
import FormularioContacto from '../componentes/FormularioContacto'

export default class EjercicioNuevo extends React.Component {
    state = {
        form:  {
            nombre: '',
            apellido: '',
            correo: '',
            comentario: ''
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
            <div className="row">
                <div className="col-sm ExerciseNew_Card_Space text-center">
                    <h4>INFORMACION DE CONTACTO</h4><br/>
                    <div className="col-sm">
                        <FormularioContacto
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