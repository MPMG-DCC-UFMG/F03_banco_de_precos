import React, { ChangeEvent, useContext, useState } from 'react';
import HeaderMainFooter from '../templates/HeaderMainFooter';
import { Button, Typography, Badge, ToggleButtonGroup, ToggleButton, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import SelectMultiple from '../components/SelectMultiple';
import SelectCities from '../components/SelectCities';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AdvancedFilter from '../components/AdvancedFilter';

const years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function Home() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const { filters, setFilters, description, countFilters } = useContext(GlobalStateContext)
    const navigate = useNavigate();

    const onSearch = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate('/result')
    }

    const handleChange = (key: string, value: string) => {
        setFilters({
            ...filters,
            [key]: value
        });
    };

    const setAfter = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = event;
        handleChange(target.name, target.value + "-01");
    };

    const setBefore = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { target } = event;
        handleChange(target.name, target.value + "-30");
    };

    const changePeriodOrExercise = (isPeriod: boolean) => {
        if (isPeriod) {
            setFilters({ ...filters, year: [], month: [], isPeriod });
        } else {
            setFilters({ ...filters, before: undefined, after: undefined, isPeriod });
        }
    }

    return (<HeaderMainFooter>
        <div className='min-h-main w-full flex items-center justify-center'>
            <AdvancedFilter open={showModal} onClose={() => setShowModal(false)} />
            <div className="w-full max-w-xl text-center">
                <div className="mb-8">
                    <Typography variant='h3'>Banco de Preços</Typography>
                </div>
                <form onSubmit={onSearch}>
                    <SearchInput />

                    <div className="my-4 flex gap-4">
                        <SelectCities />
                    </div>

                    <div className="my-4 flex gap-4 items-center">
                        <div className="w-1/3">
                            <ToggleButtonGroup
                                value={filters.isPeriod ? "period" : "exercise"}
                                exclusive
                                onChange={(event, newValue) => changePeriodOrExercise(newValue === "period")}
                                size="small"
                            >
                                <ToggleButton value="period">Período</ToggleButton>
                                <ToggleButton value="exercise">Exercício</ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        {filters.isPeriod ? <>
                            <div className="w-1/3">
                                <TextField onChange={(ev) => setAfter(ev)} value={filters.after?.substring(0, 7)} name="after" className='w-full' type="month" variant="outlined" />
                            </div>
                            <div className="w-1/3">
                                <TextField onChange={(ev) => setBefore(ev)} value={filters.before?.substring(0, 7)} name="before" className='w-full' type="month" variant="outlined" />
                            </div>
                        </> : <>
                            <div className="w-1/3">
                                <SelectMultiple options={years} label="Ano(s)" filterKey='year' />
                            </div>
                            <div className="w-1/3">
                                <SelectMultiple options={months} label="Meses(s)" filterKey='month' />
                            </div>
                        </>}

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
