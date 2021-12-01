import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import Button from 'react-bootstrap/Button'
import Buscador from '/home/johnatan/MP/mp-app/ap/src/app/views/material-kit/auto-complete/CxBusca'
import Filtro from '/home/johnatan/MP/mp-app/ap/src/app/views/material-kit/auto-complete/Filtro'
import '/home/johnatan/MP/mp-app/ap/src/app/views/material-kit/auto-complete/CxBusca.css'
import DatatablePage from '/home/johnatan/MP/mp-app/ap/src/app/views/material-kit/auto-complete/TabelaResultado'
import Form from 'react-bootstrap/Form'
//import DataFormulario from './DatePickerPage'
import Example from './DataFormulario'
import './DataFormulario.css'
import Fieldset, { withFieldset, useFieldset } from 'react-fieldset'
import DynamicForm from 'react-dynamic-form'

const AppAutoComplete = () => {
    return (
        <div className="m-sm-3">
            <Form>
                <h1 className="bancoPreco">Banco de Preços</h1>
                <SimpleCard title=" ">
                    <Buscador></Buscador>
                    <Example></Example>

                    <Button type="submit" className="btnBuscar">
                        Buscar
                    </Button>
                    <DatatablePage></DatatablePage>
                    <Button className="btnBuscar">Download CSV</Button>
                </SimpleCard>
            </Form>
        </div>
    )
}
export default AppAutoComplete
