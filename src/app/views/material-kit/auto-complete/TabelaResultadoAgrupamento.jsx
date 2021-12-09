import React, { useState, useEffect } from 'react'

import axios from 'axios' // npm instal axios
import { forwardRef } from 'react'
import MaterialTable from 'material-table'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import CircularProgress from '@material-ui/core/CircularProgress'

import Clear from '@material-ui/icons/Clear'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Search from '@material-ui/icons/Search'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function App(props) {
    const tableIcons = {
        DetailPanel: forwardRef((props, ref) => (
            <ChevronRight {...props} ref={ref} />
        )),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => (
            <FirstPage {...props} ref={ref} />
        )),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => (
            <ChevronRight {...props} ref={ref} />
        )),
        PreviousPage: forwardRef((props, ref) => (
            <ChevronLeft {...props} ref={ref} />
        )),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),

        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => (
            <ArrowDownward {...props} ref={ref} />
        )),
    }
    const buscar = props.buscar
    const [data, setData] = useState(false)

    const columns = [
        {
            title: 'Descrição',
            field: 'original_dsc',
            align: 'justify',
        },
        { title: 'Ano', field: 'ano', align: 'center' }, //, width: '100%'
        { title: 'Und Medida', field: 'dsc_unidade_medida', align: 'center' },
        { title: 'Média', field: 'mean', align: 'center' },
        { title: 'Mínimo', field: 'min', align: 'center' },
        { title: 'Máximo', field: 'max', align: 'center' },
        { title: 'Contagem', field: 'count', align: 'center' },
    ]

    useEffect(() => {
        if (buscar) {
            fetch(`http://127.0.0.1:8000/api/items/?description=${buscar}`)
                .then((resp) => resp.json())
                .then((resp) => {
                    setData(resp)
                })
        }
    }, [buscar])

    return (
        <div className="">
            <div>
                {(() => {
                    if (buscar) {
                        return (
                            <div>
                                {!data ? (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <CircularProgress />
                                    </Box>
                                ) : (
                                    <MaterialTable
                                        icons={tableIcons}
                                        data={data}
                                        columns={columns}
                                        options={{
                                            cellStyle: {
                                                width: '8%',
                                                maxWidth: '100%',
                                            },
                                            headerStyle: {
                                                width: '100%',
                                                maxWidth: '100%',
                                            },
                                            grouping: true,
                                            groupTitle: 'Teste',

                                            exportButton: true,
                                            exportFileName: 'Banco de Preço',

                                            rowStyle: (x) => {
                                                if (x.tableData.id % 2) {
                                                    return {
                                                        backgroundColor:
                                                            '#f2f2f2',
                                                    }
                                                }
                                            },
                                            headerStyle: {
                                                backgroundColor: '#378FC3',
                                                color: '#FFF',
                                                fontSize: '17px',
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                            },
                                        }}
                                        localization={{
                                            toolbar: {
                                                exportCSVName:
                                                    'Exportar para CSV',
                                                exportPDFName:
                                                    'Exportar para PDF',
                                            },
                                        }}
                                        title=""
                                    />
                                )}
                            </div>
                        )
                    } else {
                        return <div></div>
                    }
                })()}
            </div>
        </div>
    )
}

export default App
