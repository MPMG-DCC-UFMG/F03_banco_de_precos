import React from 'react'
import { MDBDataTable } from 'mdbreact'

import './TabelaResultado.css'
//import { ExportToCsv } from 'export-to-csv';


const DatatablePage = () => {
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
                field: 'preco',
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
                field: 'dsc_unidade_medida',
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
                item_id: "3138112",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "conjunto_32",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "CONJUNTO DE MICRONEBULIZADOR  PARA REDE DE AR COMPRIMIDO ADULTO COM MASCARA EM SILICONE ATOXICA",
                descricao: "conjunto micronebulizador para rede ar comprimido adulto com mascara silicone atoxicar",
                preco: 149.22,
                primeiro_termo: "conjunto"
              },
              {
                item_id: "3211476",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "para_34",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "KIT PARA INALACAO ADULTO MASCARA, MANGUEIRA E COPO DOZADOR",
                descricao: "kit para inalacao adulto mascara mangueira copo doador",
                preco: 35.843,
                primeiro_termo: "para"
              },
              {
                item_id: "3065383",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "mascara_3",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "MASCARA DESC. TRIPLA CAMADA COM ELASTICO",
                descricao: "mascara desc triplo camada com elastico",
                preco: 4.8833,
                primeiro_termo: "mascara"
              },
              {
                item_id: "3211476",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "para_34",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "KIT PARA INALACAO ADULTO MASCARA, MANGUEIRA E COPO DOZADOR",
                descricao: "kit para inalacao adulto mascara mangueira copo doador",
                preco: 35.843,
                primeiro_termo: "para"
              },
              {
                item_id: "3401337",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "mascara_32",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "MASCARA FACIAL PARA OXIGENIO TERAPIA PEDIATRICO EM SILICONE",
                descricao: "mascara facial para oxigenio terapia pediatrico silicone",
                preco: 18.12,
                primeiro_termo: "mascara"
              },
              {
                item_id: "3720297",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "mascara_32",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "MASCARA FACIAL PARA OXIGENIO TERAPIA ADULTO EM SILICONE",
                descricao: "mascara facial para oxigenio terapia adulto silicone",
                preco: 16.993,
                primeiro_termo: "mascara"
              },
              {
                item_id: "3211476",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "para_34",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "KIT PARA INALACAO ADULTO MASCARA, MANGUEIRA E COPO DOZADOR",
                descricao: "kit para inalacao adulto mascara mangueira copo doador",
                preco: 35.843,
                primeiro_termo: "para"
              },
              {
                item_id: "3211478",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "mascara_38",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "MASCARA LARINGEA, COM ENTRADA DE AR LATERAL PARA INSUFLAR O BALONETE, N 1, RN A LATENTES ATE 5 KG,",
                descricao: "mascara laringeo com entrada ar lateral para insuflar balonete n 1 rn latente 5 kg",
                preco: 234.02,
                primeiro_termo: "mascara"
              },
              {
                item_id: "3266017",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "mascara_38",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "MASCARA LARINGEA, COM ENTRADA DE AR LATERAL PARA INSUFLAR O BALONETE, N 1,5, LATENTES DE 5 A 10 KG,",
                descricao: "mascara laringeo com entrada ar lateral para insuflar balonete n 1 5 latente 10 kg",
                preco: 234.02,
                primeiro_termo: "mascara"
              },
              {
                item_id: "3667123",
                licitacao: "204947",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "mascara_11",
                dsc_unidade_medida: "caixa",
                ano: 2015,
                mes: 6,
                data: "2015-04-27",
                municipio: "PEDRA DO ANTA",
               orgao: "PREFEITURA MUNICIPAL DE PEDRA DO ANTA",
                original: "MASCARA C/ 50 UN",
                descricao: "mascara c 50 un",
                preco: 5.9028,
                primeiro_termo: "mascara"
              },
              {
                item_id: "3211476",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "para_34",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "KIT PARA INALACAO ADULTO MASCARA, MANGUEIRA E COPO DOZADOR",
                descricao: "kit para inalacao adulto mascara mangueira copo doador",
                preco: 35.843,
                primeiro_termo: "para"
              },
              {
                item_id: "4693409",
                licitacao: "206681",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "ambu_12",
                dsc_unidade_medida: "unidade",
                ano: 2016,
                mes: 7,
                data: "2016-05-06",
                municipio: "PEDRO LEOPOLDO",
               orgao: "PREFEITURA MUNICIPAL DE PEDRO LEOPOLDO",
                original: "AMBU - BALAO DE REANIMACAO NEONATAL SILICONIZADO COM RESERVATORIO DE OXIGENIO VALVULA LIBERADORA DE PRESSAO PARA RESSUCITACAO CARDIOPULMONAR INFANTIL COMPANHANDO MASCARA DE SILICONE AMBU DE SILICONE E RESERVATORIO DE O2 E EXTENSOR",
                descricao: "ambu bala reanimacao neonatal siliconado com reservatorio oxigenio valvula liberador pressao para ressucitacao cardiopulmonar infantil companhando mascara silicone o2 extensor",
                preco: 246.1342,
                primeiro_termo: "ambu"
              },
              {
                item_id: "3211476",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "para_34",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "KIT PARA INALACAO ADULTO MASCARA, MANGUEIRA E COPO DOZADOR",
                descricao: "kit para inalacao adulto mascara mangueira copo doador",
                preco: 35.843,
                primeiro_termo: "para"
              },
              {
                item_id: "4826145",
                licitacao: "206681",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "ambu_12",
                dsc_unidade_medida: "unidade",
                ano: 2016,
                mes: 7,
                data: "2016-05-06",
                municipio: "PEDRO LEOPOLDO",
               orgao: "PREFEITURA MUNICIPAL DE PEDRO LEOPOLDO",
                original: "AMBU - BALAO DE REANIMACAO ADULTO COM RESERVATORIO DE OXIGENIO E MASCARA",
                descricao: "ambu bala reanimacao adulto com reservatorio oxigenio mascara",
                preco: 242.0842,
                primeiro_termo: "ambu"
              },
              {
                item_id: "3211476",
                licitacao: "176793",
                grupo_ruido: 0,
                item_ruido: 0,
                grupo: "para_34",
                dsc_unidade_medida: "unidade",
                ano: 2015,
                mes: 4,
                data: "2015-03-17",
                municipio: "MALACACHETA",
               orgao: "PREFEITURA MUNICIPAL DE MALACACHETA",
                original: "KIT PARA INALACAO ADULTO MASCARA, MANGUEIRA E COPO DOZADOR",
                descricao: "kit para inalacao adulto mascara mangueira copo doador",
                preco: 35.843,
                primeiro_termo: "para"
              },

              
        ]
        
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
            exportToCSV="True"
            buttonText="Download as XLS"
            

        />
    )
}

export default DatatablePage
