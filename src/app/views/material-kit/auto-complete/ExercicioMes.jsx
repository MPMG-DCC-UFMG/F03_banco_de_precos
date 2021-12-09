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

    return (
        <div>
            <form>
                <FormControl>
                    <Typography variant="body1"></Typography>
                </FormControl>
                <FormControl>
                    <input
                        placeholder="2021"
                        type="number"
                        min={2000}
                        max={2030}
                        className="arredondado"
                    />
                </FormControl>
                <Typography variant="body1">Mês</Typography>
                <FormControl>
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
        marginTop: '15px',
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
            marginTop: theme.spacing(3),
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
}))
