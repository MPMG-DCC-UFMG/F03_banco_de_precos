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

function Result() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { description, countFilters } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate(`/result`)
    }

    const showTable = () => countFilters() === 0 ? <ResultsTable /> : <ResultsAggregatedTable />

    return (<HeaderMainFooter><>
        <AdvancedFilter open={showModal} onClose={() => setShowModal(false)} />
        <div className="p-5 border-b border-slate-300">
            <form onSubmit={onSearch}>
                <div className="flex items-center gap-5">
                    <div className="flex-1">
                        <SearchInput />
                    </div>
                    <div className='flex gap-4 items-center w-[650px] '>
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
        <div className="p-5 bg-slate-100 ">
            {showTable()}
        </div>
    </></HeaderMainFooter>);
}

export default Result;
