import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import "./Checkbox.css"

export default function LabelledCheckbox() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    })

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked })
    }
    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.periodo}
                        onChange={handleChange('periodo')}
                        value="periodo"
                    />
                }
                label="Período"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.valCotado}
                        onChange={handleChange('valCotado')}
                        value="valCotado"
                    />
                }
                label="Valor Cotado"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.orgao}
                        onChange={handleChange('orgao')}
                        value="orgao"
                    />
                }
                label="Orgão"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.municipio}
                        onChange={handleChange('municipio')}
                        value="municipio"
                    />
                }
                label="Município"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.licitante}
                        onChange={handleChange('licitante')}
                        value="licitante"
                    />
                }
                label="Licitante Vencedor"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.valor}
                        onChange={handleChange('valor')}
                        value="valor"
                    />
                }
                label="Valor"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.qtdComprada}
                        onChange={handleChange('qtdComprada')}
                        value="qtdComprada"
                    />
                }
                label="Qtd. Comprada"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.natureza}
                        onChange={handleChange('natureza')}
                        value="natureza"
                    />
                }
                label="Natureza da Despesa"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.pagamento}
                        onChange={handleChange('pagamento')}
                        value="pagamento"
                    />
                }
                label="Forma de Pagamento"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.modaLicitacao}
                        onChange={handleChange('modaLicitacao')}
                        value="modaLicitacao"
                    />
                }
                label="Modalidade de Licitação"
            />
            <div id="textv" >
                Digite o valor:<input type="text" id="textv" />
            </div>
        </FormGroup>
    )
}
