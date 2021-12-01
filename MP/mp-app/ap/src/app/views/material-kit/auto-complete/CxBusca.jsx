import React from 'react'
import Form from 'react-bootstrap/Form'
import './CxBusca.css'
import Button from 'react-bootstrap/Button'

export default function Buscador() {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>
                        <h5 className="combinaFiltro">Digite uma descrição</h5>
                    </Form.Label>
                    <Form.Control className="buscadorField" type="text" />
                </Form.Group>
            </Form>
        </div>
    )
}
