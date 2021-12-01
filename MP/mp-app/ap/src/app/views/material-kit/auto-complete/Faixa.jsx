import * as React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

export default function StateTextFields() {
    const [name, setName] = React.useState('Cat in the Hat')
    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <fieldset>
            <legend>Faixas</legend>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Quantidade Comprada (min)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: '1', step: '1' }}
                />
                <TextField
                    label="Quantidade Comprada (máx)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: '1', step: '1' }}
                />
                <TextField label="CNPJ" />
                <TextField
                    label="Preço Unitário (min)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: '1', step: '1' }}
                />
                <TextField
                    label="Preço Unitário (máx)"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{ min: '1', step: '1' }}
                />
            </Box>
        </fieldset>

        
    )
}
