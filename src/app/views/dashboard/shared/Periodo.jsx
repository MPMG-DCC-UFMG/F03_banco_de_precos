import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'


import './shared/AppStyle.css'
import Tabs from './shared/Tabs'

import SimpleTable from '/home/johnatan/MP/mp-app/ap/src/app/views/material-kit/tables/SimpleTable.jsx'

import { SimpleCard, MatxProgressBar } from 'app/components'

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <div>
                            <h1>Banco de Preço</h1>
                            Selecione um dos filtros na coluna a esquerda.<br />
                            Você pode filtrar por:
                            <ul>
                                <li>Período</li>
                                <li>Valor Cotado</li>
                                <li>Orgão</li>
                                <li>Município</li>
                                <li>Licitante Vencedor</li>
                                <li>Valor</li>
                                <li>Qtd. Comprada</li>
                                <li>Natureza da Despesa </li>
                                <li>Forma de Pagamento</li>
                                <li>Modalidade de Licitação</li>
                            </ul>
                        </div>
                        <RowCards />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
