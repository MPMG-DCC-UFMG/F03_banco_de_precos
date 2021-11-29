import React, { useState } from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import {
    Button,
    FormControl,
    OutlinedInput,
    TextField,
    Typography,
    Select,
    MenuItem,
} from '@material-ui/core'

import Meses from './CheckMeses'


export default function App() {
    const classes = useStyles()

    const fields = ['FirstName', 'LastName', 'PostCode', 'Gender']
    const [searcBy, setSearchBy] = useState('FirstName')
    const [searchText, setSearchText] = useState('')

    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <FormControl
                    className={classNames(classes.formControl, classes.text)}
                >
                    <Typography variant="body1" className={classes.type}>
                        Exercício
                    </Typography>
                </FormControl>
                <FormControl
                    className={classNames(classes.formControl, classes.select)}
                >
                    <input
                        placeholder="2021"
                        type="number"
                        min={2000}
                        max={2030}
                        className="arredondado"
                    />
                </FormControl>
                <Typography variant="body1" className={classes.type}>
                    Mês
                </Typography>
                <FormControl
                    className={classNames(classes.formControl, classes.select)}
                >
                    <Meses></Meses>
                </FormControl>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: 800,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        minWidth: 120,
    },
    type: {
        fontWeight: 600,
    },
    formControl: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            minWidth: '100%',
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(1),
        },
    },
    input: {
        padding: '10px 14px',
    },
    select: {
        maxWidth: 130,
    },
    search: {
        maxWidth: 180,
    },
    submitBtn: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
}))
