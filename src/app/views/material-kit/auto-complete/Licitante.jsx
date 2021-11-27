import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
//import Box from '@material-ui/core/Box'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { styled } from '@material-ui/core/styles'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function BasicGrid() {
    const defaultProps = {
        options: RazaoSocial,
        getOptionLabel: (option) => option.title,
    }

    const flatProps = {
        options: RazaoSocial.map((option) => option.title),
    }

    const [value, setValue] = React.useState(null)

    return (
        <fieldset>
            <legend>Fornecedor</legend>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>
                            <Autocomplete
                                disablePortal
                                {...defaultProps}
                                id="disable-clo/se-on-select"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Razão Social"
                                        variant="standard"
                                        className="razaoSocial"
                                    />
                                )}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <TextField label="CNPJ" sx={{ width: '100%', maxWidth: '100%' }}/>
                        </Item>
                    </Grid>
                   
                </Grid>
            </Box>
        </fieldset>
    )
}

const RazaoSocial = [
    { title: 'UNIQUE DISTRIBUIDORA DE MEDICAMENTOS EIRELI' },
    { title: 'UNIAO QUIMICA FARMACEUTICA NACIONAL S A' },
    { title: 'SOMA/MG PRODUTOS HOSPITALARES LTDA' },
    {
        title: 'SOLUMED DISTRIBUIDORA DE MEDICAMENTOS E PRODUTOS PARA SAUDE LTDA',
    },
    { title: 'SANOFI MEDLEY FARMACEUTICA LTDA' },
    { title: 'PRATI, DONADUZZI & CIA LTDA' },
    {
        title: 'ORIENTE FARMACEUTICA COMERCIO IMPORTACAO E EXPORTACAO LTDA -EPP',
    },
    { title: 'NUNESFARMA DISTRIBUIDORA DE PRODUTOS FARMACEUTICOS LTDA' },
    { title: 'NOVARTIS BIOCIENCIAS SA' },
    { title: 'MULTIFARMA COMERCIO E REPRESENTACOES LTDA.' },
    { title: 'MED CENTER COMERCIAL LTDA' },
    { title: 'HOSPFAR INDUSTRIA E COMERCIO DE PRODUTOS HOSPITALARES S.A.' },
    { title: 'HALEX ISTAR INDUSTRIA FARMACEUTICA SA' },
    { title: 'FRESENIUS KABI BRASIL LTDA.' },
    { title: 'FRESENIUS KABI BRASIL LTDA.' },
    { title: 'COSTA CAMARGO COM. DE PRODUTOS HOSPITALARES LTDA' },
    { title: 'CIMED INDUSTRIA DE MEDICAMENTOS LTDA' },
    { title: 'CHRISPIM NEDI CARRILHO EIRELI - EPP' },
    { title: 'CASULA & VASCONCELOS INDUSTRIA FARMACEUTICA E COMERCIO LTDA' },
    { title: 'BIOMIG MATERIAIS MEDICO-HOSPITALARES LTDA' },
]
