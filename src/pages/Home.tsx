import React, { useContext, useState } from 'react';
import HeaderMainFooter from '../templates/HeaderMainFooter';
import { Button, Typography, Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AdvancedFilter from '../components/AdvancedFilter';
import PeriodSelector from '../components/PeriodSelector';
import SearchTypeSelector from '../components/SearchTypeSelector';


function Home() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { countFilters } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate('/result')
    }

    return (<HeaderMainFooter>
        <div className='min-h-main w-full flex items-center justify-center'>
            <AdvancedFilter open={showModal} onClose={() => setShowModal(false)} />
            <div className="w-full max-w-2xl text-center">
                <div className="mb-8">
                    <Typography variant='h3'>Banco de Preços</Typography>
                </div>
                <form onSubmit={onSearch}>
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <SearchTypeSelector />
                        </div>
                        <div className="flex-1">
                            <SearchInput />
                        </div>
                    </div>

                    <div className="my-4 flex gap-4 items-center">
                        <PeriodSelector />
                    </div>

                    <div className="mt-8">
                        <Button type="submit" variant='contained'>Buscar</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Badge badgeContent={countFilters()} color="primary">
                            <Button onClick={() => setShowModal(true)} size='medium'><FilterAltIcon /> Filtro</Button>
                        </Badge>
                    </div>
                </form>
            </div>
        </div>
    </HeaderMainFooter>);
}

export default Home;
