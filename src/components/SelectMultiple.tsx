import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalStateContext, IFilters } from '../wrappers/GlobalContext';

type Props = {
  options: string[],
  label: string,
  filterKey: string,
}

function SelectMultiple({ options, label, filterKey }: Props) {
  const { filters, setFilters } = useContext(GlobalStateContext);

  const handleChange = (event: SelectChangeEvent<string | number | true | string[]>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      [filterKey]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const value = () => filters[filterKey as keyof IFilters] || [];
  const isChecked = (option: string): boolean => Array.isArray(value()) ? (value() as string[]).includes(option) : false;

  return (
    <FormControl className='w-full'>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={label}
        multiple
        input={<OutlinedInput label={label} />}
        value={value()}
        renderValue={(selected: any) => selected.join(', ')}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={isChecked(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMultiple;
