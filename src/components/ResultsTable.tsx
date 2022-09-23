import React, { useContext, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import { toCurrency, toFormatedNumber } from '../utils/helpers';
import { queryStringConverter } from '../services/apiRequest';
import { Info } from '@mui/icons-material';

function ResultsTable() {
    const [pageSize, setPageSize] = useState<number>(100);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { description, filters, searchType: search_type } = useContext(GlobalStateContext);
    const { data, error, loading } = useFetch(`${endpoints.ITEMS}${queryStringConverter({ page: currentPage, size: pageSize, search_type })}`, JSON.stringify({ description, ...filters }), "POST")

    const renderCellAct = (params: GridRenderCellParams) => <span className='truncate' title={params.value}>{params.value}</span>;
    const renderCellLic = (params: GridRenderCellParams) => {
        console.log(params);
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

    const columns: GridColDef[] = [
        { field: 'id_licitacao', headerName: 'Licitação', flex: 1, minWidth: 100, renderCell: renderCellLic },
        { field: 'original_dsc', headerName: 'Descrição', flex: 1, minWidth: 300, renderCell: renderCellAct },
        { field: 'dsc_unidade_medida', headerName: 'Unid. Medida', flex: 1 },
        { field: 'preco', headerName: 'Preço unitário (R$)', flex: 1 },
        { field: 'qtde_item', headerName: 'Quantidade' },
        { field: 'nome_vencedor', headerName: 'Fornecedor', flex: 1, renderCell: renderCellAct },
        { field: 'orgao', headerName: 'Orgão', flex: 1, renderCell: renderCellAct },
        { field: 'municipio', headerName: 'Município', flex: 1, renderCell: renderCellAct },
        { field: 'modalidade', headerName: 'Modalidade', flex: 1, renderCell: renderCellAct },
        { field: 'tipo_licitacao', headerName: 'Tipo de Licitação', flex: 1 },
        { field: 'data', headerName: 'Data' },
    ];

    const formatedData = () => data.data.map((d: any) => ({
        ...d,
        preco: toCurrency(d.preco),
        qtde_item: toFormatedNumber(d.qtde_item),
        data: new Date(d.data).toLocaleDateString('pt-br')
    }))

    return (<div className='bg-white h-result'>
        {loading || !data
            ? <CircularProgress />
            : <DataGrid
                paginationMode='server'
                pageSize={pageSize}
                rows={formatedData()}
                rowCount={data.total}
                page={currentPage}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                onPageChange={(newPage) => setCurrentPage(newPage)}
                columns={columns}
                getRowId={(e: any) => e.id_item}
            />
        }
    </div>);
}

export default ResultsTable;
