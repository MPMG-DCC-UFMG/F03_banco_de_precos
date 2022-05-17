import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalStateContext, IFilters } from '../wrappers/GlobalContext';

type Props = {
  options: Array<{ label: string, key?: string }>,
  label: string,
  filterKey: string,
}

function SelectSingle({ options, label, filterKey }: Props) {
  const { filters, setFilters } = useContext(GlobalStateContext);

  const handleChange = (event: SelectChangeEvent<string | number | boolean | string[]>) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      [filterKey]: value,
    });
  };

  const value = () => filters[filterKey as keyof IFilters];

  return (
    <FormControl className='w-full'>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={label}
        input={<OutlinedInput label={label} />}
        value={value()}
        onChange={handleChange}
      >
        <MenuItem value=""> - </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.label} value={option.key || option.label}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectSingle;
