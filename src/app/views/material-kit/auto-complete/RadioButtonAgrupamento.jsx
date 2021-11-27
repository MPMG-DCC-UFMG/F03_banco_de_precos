import * as React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export default function FormControlLabelPosition() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="descricao"
                    control={<Checkbox />}
                    label="Descrição"
                    labelPlacement="descricao"
                />
                <FormControlLabel
                    value="unidade"
                    control={<Checkbox />}
                    label="Unidade de Medida"
                    labelPlacement="unidade"
                />
                <FormControlLabel
                    value="ano"
                    control={<Checkbox />}
                    label="Ano"
                    labelPlacement="ano"
                />
                <FormControlLabel
                    value="grupo"
                    control={<Checkbox />}
                    label="Grupo do Item"
                    labelPlacement="grupo"
                />
            </FormGroup>
        </FormControl>
    )
}
