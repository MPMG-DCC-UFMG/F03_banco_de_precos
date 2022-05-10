import React, { useContext, useState } from 'react';
import HeaderMainFooter from '../templates/HeaderMainFooter';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import ResultsTable from '../components/ResultsTable';
import ResultsAggregatedTable from '../components/ResultsAggregatedTable';

function Result() {

    const { description, countFilters } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate(`/result`)
    }

    const showTable = () => countFilters() === 0 ? <ResultsTable /> : <ResultsAggregatedTable />

    return (<HeaderMainFooter><>
        <div className="p-5 border-b border-slate-300">
            <form onSubmit={onSearch}>
                <div className="flex items-center gap-5">
                    <div className="flex-1">
                        <SearchInput />
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
