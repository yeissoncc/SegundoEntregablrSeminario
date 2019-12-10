import React from 'react'

export default class Formulario extends React.Component {

    render() {
        const {onChange, onSubmit, form} = this.props
        return (
            <form className="container col-sm-4" onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Titulo" name="titulo" className="form-control" value={form.titulo}/>
                </div>

                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Descripción" name="descripcion" className="form-control" value={form.descripcion}/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Imagen" name="img" className="form-control" value={form.img}/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Color izquierdo" name="colorIzquierdo" className="form-control" value={form.colorIzquierdo}/>
                </div>
                <div className="form-group">
                    <input type="text" onChange={onChange} placeholder="Color derecho" name="colorDerecho" className="form-control" value={form.colorDerecho}/>
                </div>

                <input type="submit" onChange={onChange} value="Enviar" className="form-control btn btn-primary"/>
            </form>
        )
    }
}