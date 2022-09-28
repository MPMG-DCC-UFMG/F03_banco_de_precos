import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { toCurrency } from '../utils/helpers';
import OverpriceChart from './OverpriceChart';

type Props = {
    data: any[],
    avg_preco: number;
    max_preco: number;
    min_preco: number;
    std_preco: number;
}

function OverpriceTable({ data, avg_preco, max_preco, min_preco, std_preco }: Props) {
    const generateId = (data: any) => {
        const id = [data.grupo, data.id_licitacao];
        return id.join("_");
    }

    const formatedData = () => data.map((d: any) => ({
        ...d,
        preco_formatted: toCurrency(d.preco),
    }))

    const columns = (): GridColDef[] => {
        const columns = [
            { field: "id_licitacao", headerName: "Licitação" },
            { field: "grupo", headerName: "Descrição", flex: 1 },
            { field: "dsc_unidade_medida", headerName: "Unid. Medida" },
            { field: "preco_formatted", headerName: "Preço unitário (R$)" },
            { field: "qtde_item", headerName: "Quantidade" },
            { field: "qtde_item", headerName: "Quantidade" },
            {
                field: 'id_grupo', headerName: "Análise do Preço", flex: .75, renderCell: (params: GridRenderCellParams<any>) => (
                    <OverpriceChart {...{ avg_preco, max_preco, min_preco, std_preco }} unit_preco={params.row.preco} />
                )
            },
        ]

        return columns;
    };

    return (<>
        {data ?
            <DataGrid
                autoHeight
                hideFooter
                rows={formatedData()}
                columns={columns()}
                getRowId={generateId}
            />
            : null}
    </>);
}

export default OverpriceTable;
