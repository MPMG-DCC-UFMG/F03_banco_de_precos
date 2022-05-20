import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { GlobalStateContext, IFilters } from '../wrappers/GlobalContext';

type Props = {
  options: string[],
  label: string,
  filterKey: string,
  searchable?: boolean
}

function SelectMultiple({ options, label, filterKey, searchable }: Props) {
  const [search, setSearch] = useState<string>("");
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
  const filteredOptions = () => search ? options.filter(opt => opt.toLowerCase().includes(search.toLowerCase())) : options;

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
        {searchable ?
          <div className='p-2'>
            <TextField
              className='w-full'
              variant='outlined'
              size='small'
              placeholder='Buscar...'
              value={search}
              type="search"
              onKeyDown={(e) => { e.stopPropagation(); }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          : null}
        {filteredOptions().map((option) => (
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
