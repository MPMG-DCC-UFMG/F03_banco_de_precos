import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

import './CxBusca.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function AutoGrid() {
    const razaoSocial = {
        options: RazaoSocial,
        getOptionLabel: (option) => option.title,
    }

    const tipoProps = {
        options: Tipo,
        getOptionLabel: (option) => option.title,
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>
                        <fieldset>
                            <legend>Faixas</legend>

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 5, width: '100%' },
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
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>
                        <fieldset>
                            <legend>Órgão/instituição</legend>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Autocomplete
                                    disablePortal
                                    {...razaoSocial}
                                    id="disable-clo/se-on-select"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Nome"
                                            variant="standard"
                                            className="razaoSocial"
                                        />
                                    )}
                                />
                                <Autocomplete
                                    disablePortal
                                    {...tipoProps}
                                    id="disable-clo/se-on-select"
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: 400 }}
                                    noOptionsText={'Sem opções'}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Tipo"
                                            variant="standard"
                                            inputProps={{
                                                ...params.inputProps,
                                                style: { fontSize: '1rem' },
                                            }}
                                            className="Tipo"
                                        />
                                    )}
                                />
                            </Box>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

const RazaoSocial = [
    { title: 'Prefeitura A' },
    { title: 'Prefeitura B' },
    { title: 'Prefeitura C' },
    { title: 'Prefeitura D' },
    { title: 'Prefeitura E' },
    { title: 'Prefeitura F' },
    { title: 'Prefeitura G' },
    { title: 'Prefeitura H' },
]

const Tipo = [
    { title: 'Empresa Pública (apenas as dependentes)' },
    { title: 'Fundação' },
    { title: 'RPPS (regime próprio de previdência social)' },
    { title: 'Sociedade de Economia Mista (apenas as dependentes)' },
    { title: 'Autarquia (exceto RPPS)' },
    { title: 'Câmara Municipal' },
    { title: 'Prefeitura Municipal' },
]
