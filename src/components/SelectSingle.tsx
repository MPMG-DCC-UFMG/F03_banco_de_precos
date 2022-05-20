import { FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { GlobalStateContext, IFilters } from '../wrappers/GlobalContext';

type Props = {
  options: Array<{ label: string, key?: string }>,
  label: string,
  filterKey: string,
  searchable?: boolean
}

function SelectSingle({ options, label, filterKey, searchable }: Props) {
  const [search, setSearch] = useState<string>("");
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
  const filteredOptions = () => search ? options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase())) : options;

  return (
    <FormControl className='w-full'>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        autoWidth
        labelId={`${label}-label`}
        id={label}
        input={<OutlinedInput label={label} />}
        value={value()}
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
        <MenuItem value=""> - </MenuItem>
        {filteredOptions().map((option) => (
          <MenuItem key={option.label} value={option.key || option.label}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectSingle;
