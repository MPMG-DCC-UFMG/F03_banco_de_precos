import React, { Fragment } from 'react'
import { format } from 'date-fns'
import {
    Grid,
    Card,
    Icon,
    IconButton,
    Checkbox,
    Fab,
    Avatar,
    Hidden,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    projectName: {
        marginLeft: 24,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 4,
        },
    },
}))

const RowCards = () => {
    const classes = useStyles()

    return [1, 2, 3, 4].map((id) => (
        <Fragment key={id}>
            
            <div className="py-2" />
        </Fragment>
    ))
}

export default RowCards
