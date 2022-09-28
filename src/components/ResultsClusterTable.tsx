import React, { useContext, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { CircularProgress, IconButton } from '@mui/material';
import { queryStringConverter } from '../services/apiRequest';
import { toCurrency } from '../utils/helpers';
import { ViewList } from '@mui/icons-material';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import OverpriceDetail from './OverpriceDetail';

function ResultsClusterTable() {
    const [pageSize, setPageSize] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { description, filters, searchType: search_type } = useContext(GlobalStateContext);
    const { data, error, loading } = useFetch(`${endpoints.OVERPRICE}${queryStringConverter({ page: currentPage - 1, size: pageSize, search_type })}`, JSON.stringify({ description, ...filters }), "POST")
    const [showModal, setShowModal] = useState<any>(null);

    const generateId = (data: any) => {
        const id = [data.group_by_grupo, data.group_size];
        return id.join("_");
    }

    const renderCellAct = (params: GridRenderCellParams) => <span className='truncate' title={params.value}>{params.value}</span>;

    const columns = (): GridColDef[] => {
        

        const columns = [
            {
                field: 'id', headerName: "Detalhamento", renderCell: (params: GridRenderCellParams<any>) => (<IconButton onClick={() => setShowModal(params.row)}>
                    <ViewList />
                </IconButton>)
            },
            { field: 'group_by_grupo', headerName: 'Grupo', flex: 1 },
            { field: 'group_size', headerName: 'Tamanho do Grupo', flex: .7 },
            { field: 'avg_preco_formatted', headerName: 'Preço médio (R$)', flex: .7 },
        ]

        return columns;
    };

    const formatedData = () => data.data.map((d: any) => ({
        ...d,
        avg_preco_formatted: toCurrency(d.avg_preco),
        max_preco_formatted: toCurrency(d.min_preco),
        min_preco_formatted: toCurrency(d.max_preco),
        std_preco_formatted: toCurrency(d.max_preco),
    }))

    const rowCount = () => {
        return (currentPage + 2) * pageSize;
    }

    return (<div className='bg-white h-result'>
        {showModal ? <OverpriceDetail open onClose={() => setShowModal(null)} selectedData={showModal} /> : null}
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

export default ResultsClusterTable;
