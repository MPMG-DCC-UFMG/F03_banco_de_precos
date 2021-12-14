import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Meses from './CheckMeses'
import { withStyles } from '@material-ui/core/styles'
import React, { useState, useRef, useEffect } from 'react'
import { SimpleCard } from 'app/components'
import Button from 'react-bootstrap/Button'
import './CxBusca.css'
import Form from 'react-bootstrap/Form'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Accordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TabelaResultado from './TabelaResultado'
import Agrupamento from './CheckBoxAgrupamento'
import Faixa from './Faixa'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'


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

const styles = (theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
})

const AccordionSummary = withStyles({
    root: {
        flexDirection: 'column',
    },
    content: {
        marginBottom: 0,
    },
    expandIcon: {
        marginRight: 0,
        paddingTop: 0,
    },
})(MuiAccordionSummary)

export default function ResponsiveStack() {
    const [show, setShow] = useState(false)
    const classes = useStyles()

    const [currentRadioValue, setCurrentValue] = React.useState('on')

    const handleRadioChange = (value) => {
        setCurrentValue(value)
    }

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
                                    <h3 className="buscadorField"></h3>
                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField
                                            className={classes.TextField}
                                            placeholder="Digite uma descrição"
                                            variant="outlined"
                                            fullWidth={true}
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
                        <Stack gap={1}>
                            <Stack
                                spacing={1}
                                direction="row"
                                justifyContent="center"
                                className={classes.TextField}
                            >
                                <Item>
                                    <FormControlLabel
                                        control={
                                            <Radio defaultChecked={true} />
                                        }
                                        label="Exercício"
                                        onChange={(e) =>
                                            setCurrentValue(e.target.value)
                                        }
                                    />
                                </Item>
                                <Item>
                                    <FormControlLabel
                                        value="off"
                                        control={<Radio />}
                                        label="Período"
                                        onChange={(e) =>
                                            setCurrentValue(e.target.value)
                                        }
                                    />
                                </Item>
                                <Item>
                                    {' '}
                                    {currentRadioValue === 'on' && (
                                        <input
                                            placeholder="2021"
                                            type="number"
                                            min={2000}
                                            max={2030}
                                            className="arredondado"
                                        />
                                    )}
                                </Item>
                                <Item>
                                    <Meses></Meses>
                                </Item>
                            </Stack>
                        </Stack>

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
                        {/*<TabelaResultadoAgrupamento buscar={textoDes}></TabelaResultadoAgrupamento>*/}
                    </div>
                </SimpleCard>
            </Form>
        </div>
    )
}
