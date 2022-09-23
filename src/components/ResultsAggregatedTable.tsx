import React, { useContext, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { CircularProgress, IconButton } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import Detail from './Detail';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import { queryStringConverter } from '../services/apiRequest';
import { toCurrency, toFormatedNumber } from '../utils/helpers';

function ResultsAggregatedTable() {
    const [pageSize, setPageSize] = useState<number>(100);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { description, filters, searchType: search_type } = useContext(GlobalStateContext);
    const { data, error, loading } = useFetch(`${endpoints.PRICING}${queryStringConverter({ page: currentPage - 1, size: pageSize, search_type })}`, JSON.stringify({ description, ...filters }), "POST")
    const [showModal, setShowModal] = useState<any>(null);

    const generateId = (data: any) => {
        const id = [];
        if (data.group_by_description) id.push(data.group_by_description);
        if (data.group_by_unit_metric) id.push(data.group_by_unit_metric);
        if (data.group_by_year) id.push(data.group_by_year);

        return id.join("_");
    }

    const renderCellAct = (params: GridRenderCellParams) => <span className='truncate' title={params.value}>{params.value}</span>;
    
    const columns = (): GridColDef[] => {
        let columns: GridColDef[] = [
            {
                field: 'id', headerName: "Detalhamento", renderCell: (params: GridRenderCellParams<any>) => (<IconButton onClick={() => setShowModal(params.row)}>
                    <BarChartIcon />
                </IconButton>)
            }];

        if (filters.group_by_description)
            columns.push({ field: 'group_by_description', headerName: 'Descrição', flex: 1, renderCell: renderCellAct });

        if (filters.group_by_unit_metric)
            columns.push({ field: 'group_by_unit_metric', headerName: 'Unidade de Medida', flex: .3, renderCell: renderCellAct });

        if (filters.group_by_year)
            columns.push({ field: 'group_by_year', headerName: 'Ano', flex: .3, renderCell: renderCellAct });

        columns = [...columns, ...[
            { field: 'mean', headerName: 'Preço médio (R$)', flex: .3, renderCell: renderCellAct },
            { field: 'min', headerName: 'Preço mínimo (R$)', flex: .3, renderCell: renderCellAct },
            { field: 'max', headerName: 'Preço máximo (R$)', flex: .3, renderCell: renderCellAct },
            { field: 'count', headerName: 'Quantidade total', flex: .3, renderCell: renderCellAct }
        ]]

        return columns;
    };

    const formatedData = () => data.data.map((d: any) => ({
        ...d,
        mean: toCurrency(d.avg_preco),
        min: toCurrency(d.min_preco),
        max: toCurrency(d.max_preco),
        count: toFormatedNumber(d.sum_qtde_item),
    }))

    const rowCount = () => {
        return (currentPage+2)*pageSize;
    }

    return (<div className='bg-white h-result'>
        {showModal ? <Detail open onClose={() => setShowModal(null)} selectedData={showModal} /> : null}
        {loading || !data
            ? <CircularProgress />
            : <DataGrid
                paginationMode='server'
                pageSize={pageSize}
                rowCount={rowCount()}
                page={currentPage}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onPageChange={(newPage) => { if (newPage > 0) setCurrentPage(newPage) }}
                rows={formatedData()}
                columns={columns()}
                getRowId={generateId}
            />
        }
    </div>);
}

export default ResultsAggregatedTable;
