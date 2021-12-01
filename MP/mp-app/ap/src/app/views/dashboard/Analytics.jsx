import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import RowCards from './shared/RowCards'
import { useTheme } from '@material-ui/styles'
import './shared/AppStyle.css'

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <div>
                            <h1 className="bemvindo">Seja bem vindo!</h1>
                            <img
                                class="displayed"
                                src="/assets/images/illustrations/Logo_mpmg.png"
                                width="30%"
                                height="30%"
                            />
                        </div>
                        <RowCards />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
