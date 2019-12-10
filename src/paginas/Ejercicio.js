import React from 'react'
import Tarjeta from '../componentes/Tarjeta'
import Bienvenida  from '../componentes/Bienvenida'
import Cargando from '../componentes/Cargando'
import AnadirBoton from '../componentes/AnadirBoton'



export default class Ejercicio extends React.Component {
    state = {
        cargando: true,
        data: [{
            "id": 1,
            "titulo": "Technique Guides",
            "descripcion": "Learn amazing street workout and calisthenics",
            "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
            "colorIzquierdo": "#A74CF2",
            "colorDerecho": "#617BFB"
        },{
            "id": 2,
            "titulo": "Skills Training",
            "descripcion": "Learn the secrets of bodyweight techniques",
            "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
            "colorIzquierdo": "#17EAD9",
            "colorDerecho": "#6078EA"
        },{
            "id": 3,
            "titulo": "Strength Training",
            "descripcion": "Train anytime, everywere and become a superhero!",
            "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
            "colorIzquierdo": "#FAD961",
            "colorDerecho": "#F76B1C"
        }]
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                cargando: false
            })
        }, 1000)
    }

    render() {
        if(this.state.cargando) {
            return <Cargando/>
        }

        return(
            <div>
                <Bienvenida
                    usuario="Yeisson"
                    mensaje="Plantillas De Rutinas"
                />
                {
                    this.state.data.map(({id, titulo, descripcion, img, colorIzquierdo, colorDerecho}) => {
                        return(
                            <Tarjeta
                                key={id}
                                titulo={titulo}
                                descripcion={descripcion}
                                img={img}
                                colorIzquierdo={colorIzquierdo}
                                colorDerecho={colorDerecho}
                            />
                        )
                    })
                }

                <AnadirBoton/>
            </div>
        )
    }
}