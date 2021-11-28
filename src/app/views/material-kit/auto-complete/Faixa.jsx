import * as React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'

import './CxBusca.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormLabel-root': {
            color: '666666', // or black
            fontSize: '3ch',
        },
    },
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
    const modalidadeProps = {
        options: Modalidade,
        getOptionLabel: (option) => option.title,
    }

    const TipoLicitacaoProps = {
        options: TipoLicitacao,
        getOptionLabel: (option) => option.title,
    }

     const naturezaObjetoProps = {
        options: NaturezaOjeto,
        getOptionLabel: (option) => option.title,
    }

    const classes = useStyles()

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
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ min: '1', step: '1' }}
                                    inputProps={{ className: 'test' }}
                                    className={classes.root}
                                />
                                <TextField
                                    label="Quantidade Comprada (máx)"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{ min: '1', step: '1' }}
                                    className={classes.root}
                                />
                                <TextField
                                    label="CNPJ"
                                    className={classes.root}
                                />
                                <TextField
                                    label="Preço Unitário (min)"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{ min: '1', step: '1' }}
                                    className={classes.root}
                                />
                                <TextField
                                    label="Preço Unitário (máx)"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{ min: '1', step: '1' }}
                                    className={classes.root}
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
                                            className={classes.root}
                                        />
                                    )}
                                />
                                <Autocomplete
                                    disablePortal
                                    {...tipoProps}
                                    id="disable-clo/se-on-select"
                                    // getOptionLabel={(option) => option.title}
                                    // style={{ width: 400 }}
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
                                            className={classes.root}
                                        />
                                    )}
                                />
                            </Box>
                        </fieldset>
                    </Item>
                    <Grid item xs>
                        <Item>
                            <fieldset>
                                <legend>Fornecedor/licitante vencedor</legend>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {
                                            m: 1,
                                            width: '100%',
                                        },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Autocomplete
                                        disablePortal
                                        id="disable-clo/se-on-select"
                                        getOptionLabel={(option) =>
                                            option.title
                                        }
                                        noOptionsText={'Sem opções'}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Razão Social"
                                                variant="standard"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    style: { fontSize: '1rem' },
                                                }}
                                                className={classes.root}
                                            />
                                        )}
                                    />
                                    <TextField
                                        label="CNPJ"
                                        className={classes.root}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="disable-clo/se-on-select"
                                        autoComplete="off"
                                        getOptionLabel={(option) =>
                                            option.title
                                        }
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
                                                className={classes.root}
                                            />
                                        )}
                                    />
                                </Box>
                            </fieldset>
                        </Item>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Item>
                        <fieldset>
                            <legend>Modalidade da licitação</legend>
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
                                    {...TipoLicitacaoProps}
                                    id="disable-clo/se-on-select"
                                    getOptionLabel={(option) => option.title}
                                    noOptionsText={'Sem opções'}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label=""
                                            variant="standard"
                                            inputProps={{
                                                ...params.inputProps,
                                                style: { fontSize: '1rem' },
                                            }}
                                            className={classes.root}
                                        />
                                    )}
                                />
                            </Box>
                        </fieldset>
                    </Item>
                    <Grid item xs>
                        <Item>
                            <fieldset>
                                <legend>Tipo da licitação</legend>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {
                                            m: 1,
                                            width: '100%',
                                        },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Autocomplete
                                        disablePortal
                                        {...modalidadeProps}
                                        id="disable-clo/se-on-select"
                                        getOptionLabel={(option) =>
                                            option.title
                                        }
                                        noOptionsText={'Sem opções'}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label=""
                                                variant="standard"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    style: { fontSize: '1rem' },
                                                }}
                                                className={classes.root}
                                            />
                                        )}
                                    />
                                </Box>
                            </fieldset>
                        </Item>
                    </Grid>
                    <Grid item xs>
                        <Item>
                            <fieldset>
                                <legend>Natureza do Objeto</legend>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': {
                                            m: 1,
                                            width: '100%',
                                        },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Autocomplete
                                        disablePortal
                                        {...naturezaObjetoProps}
                                        id="disable-clo/se-on-select"
                                        getOptionLabel={(option) =>
                                            option.title
                                        }
                                        noOptionsText={'Sem opções'}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label=""
                                                variant="standard"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    style: { fontSize: '1rem' },
                                                }}
                                                className={classes.root}
                                            />
                                        )}
                                    />
                                </Box>
                            </fieldset>
                        </Item>
                    </Grid>
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

const Modalidade = [
    { title: 'Concorrência' },
    { title: 'Convite' },
    { title: 'Leilão' },
    { title: 'Pregão Eletrônico' },
    { title: 'Concurso' },
    { title: 'Pregão Presencial' },
    { title: 'Tomada de Preços' },
]

const TipoLicitacao = [
    { title: 'Maior Lance ou Oferta' },
    { title: 'Melhor Técnica' },
    { title: 'Menor Preço' },
    { title: 'Técnica e Preço' },
]


const NaturezaOjeto=[
        { title: 'Alineação de Bens' },
        { title: 'Compras e Outros Serviços' },
        { title: 'Compras para Obras e/ou Serviços de Engenharia' },
        { title: 'Permissão'},
        { title: 'Concessão' },
        { title: 'Locação de Imóveis' },

]

