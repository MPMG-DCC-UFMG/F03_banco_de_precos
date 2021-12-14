import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Stack from '@mui/material/Stack'
import Autocomplete from '@material-ui/lab/Autocomplete'
import './CxBusca.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const useStyles = makeStyles((theme) => ({
    TextField: {
        '& .MuiFormLabel-root': {
            color: 'black', // or black
            fontSize: '2.5ch',
        },
    },
}))

export default function RowAndColumnSpacing() {
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
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1}>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Faixas</legend>

                            <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="left"
                                >
                                    <Item>
                                        <TextField
                                            label="Quantidade Comprada (min)"
                                            type="number"
                                            InputLabelProps={{ shrink: true }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label="Quantidade Comprada (máx)"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    </Stack>
                                    </Stack>
                                    <Stack gap={1}>
                                <Stack
                                    spacing={1}
                                    direction="row"
                                    justifyContent="left"
                                >
                             
                                    <Item>
                                        <TextField
                                            label="Preço Unitário (min)"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label="Preço Unitário (máx)"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{ min: '1', step: '1' }}
                                            className={classes.TextField}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Órgão/instituição</legend>
                            <Stack gap={1}>
                                <Stack
                                    spacing={3}
                                    direction="row"
                                    justifyContent="left"
                                >
                                    <Item>
                                        <Autocomplete
                                            disablePortal
                                            {...razaoSocial}
                                            id="disable-clo/se-on-select"
                                            style={{ width: 250 }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Nome"
                                                    variant="standard"
                                                    className={
                                                        classes.TextField
                                                    }
                                                />
                                            )}
                                        />
                                    </Item>
                                    <Item>
                                        <Autocomplete
                                            disablePortal
                                            {...tipoProps}
                                            id="disable-clo/se-on-select"
                                            // getOptionLabel={(option) => option.title}
                                            style={{ width: 200 }}
                                            noOptionsText={'Sem opções'}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Tipo"
                                                    variant="standard"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        style: {
                                                            fontSize: '1rem',
                                                        },
                                                    }}
                                                    className={
                                                        classes.TextField
                                                    }
                                                />
                                            )}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Licitação</legend>
                            <Stack gap={1}>
                                <Stack
                                    spacing={3}
                                    direction="row"
                                    justifyContent="left"
                                >
                                    <Item>
                                        <Autocomplete
                                            disablePortal
                                            id="disable-clo/se-on-select"
                                            style={{ width: 200 }}
                                            getOptionLabel={(option) =>
                                                option.title
                                            }
                                            noOptionsText={'Sem opções'}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Nome Vencedor"
                                                    variant="standard"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        style: {
                                                            fontSize: '1rem',
                                                        },
                                                    }}
                                                    className={
                                                        classes.TextField
                                                    }
                                                />
                                            )}
                                        />
                                    </Item>
                                    <Item>
                                        <Autocomplete
                                            disablePortal
                                            {...tipoProps}
                                            id="disable-clo/se-on-select"
                                            // getOptionLabel={(option) => option.title}
                                            style={{ width: 200 }}
                                            noOptionsText={'Sem opções'}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Tipo"
                                                    variant="standard"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        style: {
                                                            fontSize: '1rem',
                                                        },
                                                    }}
                                                    className={
                                                        classes.TextField
                                                    }
                                                />
                                            )}
                                        />
                                    </Item>
                                    <Item>
                                        <TextField
                                            label="CNPJ"
                                            className={classes.TextField}
                                        />
                                    </Item>
                                    <Item>
                                        <Autocomplete
                                            disablePortal
                                            {...TipoLicitacaoProps}
                                            id="disable-clo/se-on-select"
                                            style={{ width: 150 }}
                                            getOptionLabel={(option) =>
                                                option.title
                                            }
                                            noOptionsText={'Sem opções'}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Modalidade"
                                                    variant="standard"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        style: {
                                                            fontSize: '1rem',
                                                        },
                                                    }}
                                                    className={
                                                        classes.TextField
                                                    }
                                                />
                                            )}
                                        />
                                    </Item>
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <fieldset className="fieldsetOrgao">
                            <legend>Natureza do Objeto</legend>
                            <Stack gap={1}>
                                <Stack
                                    spacing={3}
                                    direction="row"
                                    justifyContent="left"
                                >
                                    <Item>
                                        <Autocomplete
                                            disablePortal
                                            id="disable-clo/se-on-select"
                                            style={{ width: 200 }}
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
                                                        style: {
                                                            fontSize: '1rem',
                                                        },
                                                    }}
                                                    className={
                                                        classes.TextField
                                                    }
                                                />
                                            )}
                                        />
                                    </Item>
                                   
                                </Stack>
                            </Stack>
                        </fieldset>
                    </Item>
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

const NaturezaOjeto = [
    { title: 'Alineação de Bens' },
    { title: 'Compras e Outros Serviços' },
    { title: 'Compras para Obras e/ou Serviços de Engenharia' },
    { title: 'Permissão' },
    { title: 'Concessão' },
    { title: 'Locação de Imóveis' },
]
