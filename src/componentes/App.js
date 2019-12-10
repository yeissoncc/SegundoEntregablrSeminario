import React from 'react'
import Ejercicio from '../paginas/Ejercicio'
import EjercicioNuevo from '../paginas/EjercicioNuevo'
import ContactoNuevo from '../paginas/ContactoNuevo'
import NoEncontrado from '../paginas/NoEncontrado'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ejercicios" component={Ejercicio}/>
            <Route exact path="/ejercicios/nuevo" component={EjercicioNuevo}/>
            <Route exact path="/contactos/nuevo" component={ContactoNuevo}/>
            
            <Route component={Ejercicio}/>
        </Switch>
    </BrowserRouter>
)

export default App