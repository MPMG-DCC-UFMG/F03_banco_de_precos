import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { ChangeEvent, useContext } from 'react';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import SelectMultiple from './SelectMultiple';

const years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function PeriodSelector() {
    const { filters, setFilters } = useContext(GlobalStateContext)

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

    return (<>
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
    </>);
}

export default PeriodSelector;
