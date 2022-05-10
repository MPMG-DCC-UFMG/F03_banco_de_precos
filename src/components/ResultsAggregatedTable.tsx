import React, { useContext, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { CircularProgress, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import Detail from './Detail';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import { queryStringConverter } from '../services/apiRequest';

function ResultsAggregatedTable() {
    const { description, filters } = useContext(GlobalStateContext);
    const { data, error, loading } = useFetch(endpoints.PRICING, JSON.stringify({ description, ...filters }), "POST")
    const [showModal, setShowModal] = useState<any>(null);

    const generateId = (data: any) => {
        const id = [];
        if (data.original) id.push(data.original);
        if (data.dsc_unidade_medida) id.push(data.dsc_unidade_medida);
        if (data.ano) id.push(data.ano);

        return id.join("_");
    }

    const columns = (): GridColDef[] => {
        let columns: GridColDef[] = [
            {
                field: 'id', headerName: "Detalhamento", renderCell: (params: GridRenderCellParams<any>) => (<IconButton onClick={() => setShowModal(params.row)}>
                    <BarChartIcon />
                </IconButton>)
            }];

        if (filters.group_by_description)
            columns.push({ field: 'original', headerName: 'Descrição', flex: 1 });

        if (filters.group_by_unit_metric)
            columns.push({ field: 'dsc_unidade_medida', headerName: 'Unidade de Medida', flex: 1 });

        if (filters.group_by_year)
            columns.push({ field: 'ano', headerName: 'Ano', flex: 1 });

        columns = [...columns, ...[
            { field: 'mean', headerName: 'Preço médio (R$)', flex: 1 },
            { field: 'min', headerName: 'Preço mínimo (R$)', flex: 1 },
            { field: 'max', headerName: 'Preço máximo (R$)', flex: 1 },
            { field: 'count', headerName: 'Quantidade total', flex: 1 }
        ]]

        return columns;
    };

    return (<div className='bg-white h-result'>
        {showModal ? <Detail open onClose={() => setShowModal(null)} selectedData={showModal} /> : null}
        {loading || !data
            ? <CircularProgress />
            : <DataGrid
                rows={data}
                columns={columns()}
                getRowId={generateId}
            />
        }
    </div>);
}

export default ResultsAggregatedTable;
