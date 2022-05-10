import { Checkbox, FormControl, InputLabel, ListItemText, ListSubheader, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import React, { useContext } from 'react';
import cities from '../constants/cities.json';
import { GlobalStateContext } from '../wrappers/GlobalContext';

type Props = {
}

function SelectCities({ }: Props) {

    const { filters, setFilters } = useContext(GlobalStateContext);

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event;
        setFilters({
            ...filters,
            city: typeof value === 'string' ? value.split(',') : value,
        });
    };

    const value = () => filters.city || [];

    return (
        <FormControl className='w-full'>
            <InputLabel id="cities-select-label">Municípios</InputLabel>
            <Select
                labelId="cities-select-label"
                id="cities-select"
                multiple
                input={<OutlinedInput label="Municípios" />}
                value={value()}
                renderValue={(selected: any) => selected.join(', ')}
                onChange={handleChange}
            >
                {cities[0].children.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                        <Checkbox checked={value().indexOf(option.label) > -1} />
                        <ListItemText primary={option.label} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectCities;
