import React, { useContext } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { CircularProgress } from '@mui/material';
import { GlobalStateContext } from '../wrappers/GlobalContext';

function ResultsTable() {
    const { description, filters } = useContext(GlobalStateContext);
    const { data, error, loading } = useFetch(endpoints.ITEMS, JSON.stringify({ description, ...filters, limit: 1000 }), "POST")

    const columns: GridColDef[] = [
        { field: 'original_dsc', headerName: 'Descrição', flex: 1 },
        { field: 'dsc_unidade_medida', headerName: 'Unid. Medida', flex: 1 },
        { field: 'preco', headerName: 'Preço (R$)', flex: 1 },
        { field: 'qtde_item', headerName: 'Quantidade', flex: 1 },
        { field: 'nome_vencedor', headerName: 'Fornecedor', flex: 1 },
        { field: 'orgao', headerName: 'Orgão', flex: 1 },
        { field: 'municipio', headerName: 'Município', flex: 1 },
        { field: 'modalidade', headerName: 'Modalidade', flex: 1 },
        { field: 'tipo_licitacao', headerName: 'Tipo de Licitação', flex: 1 },
        { field: 'data', headerName: 'Data', flex: 1 },
    ];

    return (<div className='bg-white h-result'>
        {loading || !data
            ? <CircularProgress />
            : <DataGrid
                rows={data}
                columns={columns}
                getRowId={(e: any) => e.id_item}
            />
        }
    </div>);
}

export default ResultsTable;