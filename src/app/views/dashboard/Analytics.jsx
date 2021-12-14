import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import RowCards from './shared/RowCards'
import { useTheme } from '@material-ui/styles'
import './shared/AppStyle.css'
import  Start from "../material-kit/auto-complete/AppAutoComplete"

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
           <Start/>
        </Fragment>
    )
}

export default Analytics
