import React from 'react'

export default class FormularioContacto extends React.Component {

    render() {
        const {onChange, onSubmit, form} = this.props
        return (
            <form className="container col-sm-4" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Nombre" name="nombre" className="form-control" value={form.nombre}/>
                </div>

                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Apellido" name="apellido" className="form-control" value={form.apellido}/>
                </div>
                <div className="form-group">
                    <input type="email" onChange={onChange} placeholder="Correo" name="email" className="form-control" value={form.email}/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Comentario" name="comentario" className="form-control" value={form.comentario}/>
                </div>

                <input type="submit" onChange={onChange} value="Enviar" className="form-control btn btn-primary"/>
            </form>
        )
    }
}