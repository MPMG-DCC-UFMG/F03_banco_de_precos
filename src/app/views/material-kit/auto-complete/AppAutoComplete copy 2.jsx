import React, { useState, useRef, useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'

import Button from 'react-bootstrap/Button'

import './CxBusca.css'
import Form from 'react-bootstrap/Form'

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//import Typography from '@mui/material/Typography';
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import TabelaResultado from './TabelaResultado'
import Agrupamento from './CHeckBoxAgrupamento'
import Faixa from './Faixa'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import DateForm from './DateForm'
import ExercicioMes from './ExercicioMes.jsx'

const useStyles = makeStyles({
    content: {
        justifyContent: 'center',
    },
    TextField: {
        borderRadius: '100px',
        width: '100%',
    },
})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const AppAutoComplete = () => {
    const [show, setShow] = useState(false)
    const classes = useStyles()

    const [valueTextDescricao, setTextDescricao] = useState('')
    const handleChange = (e) => {
        setTextDescricao(e.target.value)
    }
    const [textoDes, setTextoDes] = useState('')

    const handleSearchBotaoBusca = (e) => {
        if (valueTextDescricao.length < 3) {
        } else {
            setTextoDes(valueTextDescricao)
        }
    }

    return (
        <div className="analytics m-sm-30 mt-6">
            <h1>Banco de Preços</h1>
            <Form>
                <SimpleCard title=" ">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ minHeight: '1vh' }}
                        >
                            <Grid item xs={3}>
                                <Item>
                                    <h3 className="buscadorField">
                                        Digite uma descrição
                                    </h3>
                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField
                                            className={classes.TextField}
                                            placeholder=""
                                            variant="outlined"
                                            autoFocus={true}
                                            size="small"
                                            inputProps={{
                                                style: { fontSize: 25 },
                                            }}
                                            value={valueTextDescricao}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={12}>
                                <Item>
                                    <FormControl component="fieldset">
                                        <RadioGroup
                                            row
                                            name="datas"
                                            defaultValue="exercicio"
                                        >
                                            <FormControlLabel
                                                value="exercicio"
                                                control={<Radio />}
                                                label="Exercício"
                                            />
                                            <FormControlLabel
                                                value="periodo"
                                                control={<Radio />}
                                                label="Período"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                    <ExercicioMes></ExercicioMes>
                                    <h5 className="buscadorField">
                                        {/* Limite territorial */}
                                    </h5>
                                </Item>
                            </Grid>
                        </Grid>

                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    classes={{ content: classes.content }}
                                >
                                    <Typography>
                                        <h3>Busca Avançada</h3>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Faixa></Faixa>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    classes={{ content: classes.content }} // <-- Add this line
                                >
                                    <Typography>
                                        <h3>Agrupamento</h3>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Agrupamento></Agrupamento>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Box>
                    <div>
                        <Button
                            type=""
                            variant="contained"
                            color="primary"
                            className="btnBuscar"
                            onClick={handleSearchBotaoBusca}
                        >
                            Buscar
                        </Button>
                        <TabelaResultado buscar={textoDes}></TabelaResultado>
                    </div>
                </SimpleCard>
            </Form>
        </div>
    )
}

export default AppAutoComplete
