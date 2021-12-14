import React, { useState } from 'react'
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
import Agrupamento from './RadioButtonAgrupamento'
import Faixa from './Faixa'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import DateForm from './DateForm'
import ExercicioMes from './ExercicioMes.jsx'

import Regioes from './Regioes'

const useStyles = makeStyles({
    content: {
        justifyContent: 'center',
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

    const [currentRadioValue, setCurrentValue] = React.useState('on')

    const handleRadioChange = (value) => {
        setCurrentValue(value)
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
                                    <Box sx={{ width: 500, maxWidth: '100%' }}>
                                        <TextField
                                            fullWidth
                                            label=""
                                            id="fullWidth"
                                            inputProps={{
                                                min: 0,
                                                style: { textAlign: 'center' },
                                            }} // the change is here
                                        />
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Item>
                                    <Box
                                        sx={{ width: '100%', maxWidth: '100%' }}
                                    >
                                       
                                        <div className="exercicioPeriodo">
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend"></FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-label="period"
                                                    className="row-radio-buttons-group"
                                                    defaultValue="on"
                                                >
                                                    <FormControlLabel
                                                        value="on"
                                                        control={<Radio />}
                                                        label="Exercício"
                                                        onChange={(e) =>
                                                            setCurrentValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        value="off"
                                                        control={<Radio />}
                                                        label="Período"
                                                        onChange={(e) =>
                                                            setCurrentValue(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                            {currentRadioValue === 'on' && (
                                                <ExercicioMes></ExercicioMes>
                                            )}

                                            {currentRadioValue === 'off' && (
                                                <div>
                                                    <DateForm></DateForm>
                                                </div>
                                            )}
                                        </div>
                                        <Grid item xs={2}>
                                            <Item></Item>
                                        </Grid>
                                    </Box>
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
                            onClick={() => setShow(!show)}
                        >
                            Buscar
                        </Button>
                        <p> {show}</p>
                        {show ? (
                            <p>
                                <TabelaResultado></TabelaResultado>
                            </p>
                        ) : null}
                    </div>
                </SimpleCard>
            </Form>
        </div>
    )
}

export default AppAutoComplete