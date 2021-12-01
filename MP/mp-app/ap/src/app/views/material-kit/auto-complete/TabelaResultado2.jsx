import React from 'react'
import { MDBDataTable } from 'mdbreact'
import jsonData from "/home/johnatan/Downloads/dataJson.json"
import './TabelaResultado.css'

for (var i = 0; i < jsonData.length; i++){
    var obj = jsonData[i];
}

const DatatablePage2 = () => {
    const data = {
        columns: [
            {
                label: 'Descrição',
                field: 'descricao',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Licitação',
                field: 'licitacao',
                sort: 'asc',
                width: 270,
            },
            {
                label: 'Valor',
                field: 'valor',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Grupo',
                field: 'grupo',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Unid. Medida',
                field: 'unidadeMedida',
                sort: 'asc',
                width: 150,
            },
            {
                label: 'Município',
                field: 'municipio',
                sort: 'asc',
                width: 100,
            },
            {
              label: 'Qtd. Comprada',
              field: 'qntComprada',
              sort: 'asc',
              width: 100,
          },
        ],

        
        rows: [
            {
                descricao: 'Tiger Nixon',
                licitacao: 'System Architect',
                valor: 'Edinburgh',
                grupo: '61',
                unidadeMedida: '2011/04/25',
                municipio: '$320',
                qntComprada:'100',
            },
           
        ],
    }

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
            sorting={true}
            info={false}
            paginationLabel={['Anterior', 'Próximo']}
            entriesLabel="Resultados por Página"
            searchLabel="Buscar"
        />
    )
}

export default DatatablePage2
