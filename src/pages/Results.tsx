import React, { useContext, useState } from 'react';
import HeaderMainFooter from '../templates/HeaderMainFooter';
import { Badge, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import ResultsTable from '../components/ResultsTable';
import ResultsAggregatedTable from '../components/ResultsAggregatedTable';
import PeriodSelector from '../components/PeriodSelector';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AdvancedFilter from '../components/AdvancedFilter';
import SearchTypeSelector from '../components/SearchTypeSelector';

const filterMap: any = {
    group_by_description: "Agragação por Descrição",
    group_by_unit_metric: "Agragação por Unidade de Medida",
    group_by_year: "Agragação por ano",
    min_amount: "Quantidade comprada mínima",
    max_amount: "Quantidade comprada máxima",
    min_homolog_price: "Preço unitário mínimo",
    max_homolog_price: "Preço unitário maximo",
    body: "Nome do Órgão",
    body_type: "Tipo do Órgão",
    bidder_type: "Tipo de fornecedor",
    bidder_name: "Fornecedor",
    bidder_document: "CNPJ",
    procurement_type: "Licitação",
    modality: "Modalidade",
    object_nature: "Natureza do Objeto",
    city: "Municípios",
    imediate_region: "Região Imediata",
    inter_region: "Região Intermediária",
    year: "Ano",
    month: "Mês"
}

function Result() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { filters, countFilters } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate(`/result`)
    }

    const showTable = () => countFilters() === 0 ? <ResultsTable /> : <ResultsAggregatedTable />

    const renderFilters = () => {
        const result: string[] = [];
        const filterArray = Object.entries(filters).filter(item => item[1])
        for(const f of filterArray) {
            const filterResult: string = filterMap[f[0]] +": "+ f[1];
            result.push(filterResult)
        }

        return result.map(item => <div title={item} className="inline-block mx-1 max-w-xs truncate rounded bg-slate-100 py-1 px-2">{item}</div>)
    }

    return (<HeaderMainFooter><>
        <AdvancedFilter open={showModal} onClose={() => setShowModal(false)} />
        <div className="p-5 border-b border-slate-300">
            <form onSubmit={onSearch}>
                <div className="flex items-center gap-5">
                    <div>
                        <SearchTypeSelector />
                    </div>
                    <div className="flex-1">
                        <SearchInput />
                    </div>
                    <div className='flex gap-4 items-center w-[650px]'>
                        <PeriodSelector />
                    </div>
                    <div>
                        <Badge badgeContent={countFilters()} color="primary">
                            <Button onClick={() => setShowModal(true)} size='medium'><FilterAltIcon /> Filtro</Button>
                        </Badge>
                    </div>
                    <div>
                        <Button type="submit" variant='contained'>Buscar</Button>
                    </div>
                </div>
            </form>
        </div>
        <div className='my-2'>
            {renderFilters()}
        </div>
        <div className="p-5 bg-slate-100 ">
            {showTable()}
        </div>
    </></HeaderMainFooter>);
}

export default Result;
