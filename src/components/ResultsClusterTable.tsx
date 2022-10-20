import React, { useContext, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { queryStringConverter } from '../services/apiRequest';
import { toCurrency, toFormatedNumber } from '../utils/helpers';
import { Info, ViewList } from '@mui/icons-material';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import OverpriceDetail from './OverpriceDetail';
import OverpriceChart from './OverpriceChart';

function ResultsClusterTable() {
    const [pageSize, setPageSize] = useState<number>(15);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { description, filters, searchType: search_type } = useContext(GlobalStateContext);
    const { data, error, loading } = useFetch(`${endpoints.OVERPRICE}${queryStringConverter({ page: currentPage - 1, size: pageSize, search_type })}`, JSON.stringify({ description, ...filters }), "POST")
    const [showModal, setShowModal] = useState<any>(null);

    const generateId = (data: any) => {
        const id = [data.id_item, data.id_licitacao, data.grupo_unidade_medida, data.group_size];
        return id.join("_");
    }

    const renderCellAct = (params: GridRenderCellParams) => <span className='truncate' title={params.value}>{params.value}</span>;
    const renderCellLic = (params: GridRenderCellParams) => {
        return <div>
            {params.value}
            <Tooltip title={<React.Fragment>
                <p>
                    Id licitação <br />
                    {params.row.id_licitacao}
                </p>
                <p className='mt-2'>
                    Número do processo <br />
                    {params.row.num_processo}
                </p>
                <p className='mt-2'>
                    Número da modalidade <br />
                    {params.row.num_modalidade}
                </p>
            </React.Fragment>}>
                <IconButton>
                    <Info />
                </IconButton>
            </Tooltip>
        </div>;
    }
    const renderCellChart = (params: GridRenderCellParams) => {
        return <OverpriceChart
            avg_preco={params.row.group_data.avg_preco}
            max_preco={params.row.group_data.max_preco}
            min_preco={params.row.group_data.min_preco}
            std_preco={params.row.group_data.std_preco}
            unit_preco={params.row.preco}
        />;
    }

    const columns: GridColDef[] = [
        { field: 'id_licitacao', headerName: 'Licitação', flex: 1, minWidth: 100, renderCell: renderCellLic },
        { field: 'original_dsc', headerName: 'Descrição', flex: 1, minWidth: 300, renderCell: renderCellAct },
        { field: 'dsc_unidade_medida', headerName: 'Unid. Medida', flex: 1 },
        { field: 'preco_formatted', headerName: 'Preço unitário (R$)', flex: 1 },
        { field: 'qtde_item_formatted', headerName: 'Quantidade' },
        { field: 'grupo_unidade_medida', headerName: 'Grupo', flex: 1 },
        { field: 'group_size', headerName: 'Tamanho Grupo' },
        { field: 'avg_preco_formatted', headerName: 'Preço Médio Grupo (R$)', flex: 1 },
        { field: 'preco', headerName: 'Análise de Preço', flex: 1, renderCell: renderCellChart },
    ];

    const formatedData = () => data.data.map((d: any) => ({
        ...d,
        qtde_item_formatted: toFormatedNumber(d.qtde_item),
        group_size: toFormatedNumber(d.group_data.group_size),
        avg_preco_formatted: toCurrency(d.group_data.avg_preco),
        preco_formatted: toCurrency(d.preco),
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
                rowCount={data.total}
                page={currentPage}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onPageChange={(newPage) => setCurrentPage(newPage)}
                rows={formatedData()}
                columns={columns}
                getRowId={generateId}
            />
        }
    </div>);
}

export default ResultsClusterTable;
