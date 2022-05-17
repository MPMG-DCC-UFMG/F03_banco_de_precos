import { Autocomplete, SelectChangeEvent, TextField } from '@mui/material';
import React, { ChangeEvent, useContext } from 'react';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { queryStringConverter } from '../services/apiRequest';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import cnpj from '../constants/cnpj_vencedor.json';


function CnpjInput() {
    const { filters, setFilters } = useContext(GlobalStateContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...filters,
            bidder_document: event.target.value,
        });
    };

    const options = () => {
        return cnpj.children.map((d: any) => d.label)
    }

    return (<>
        <Autocomplete
            options={options()}
            value={filters.bidder_document}
            filterOptions={(options: string[]) =>
                options.filter((cnpj) => cnpj.includes(filters.bidder_document || "")).slice(0, 10)
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={handleChange}
                    label="CNPJ"
                    required
                    InputProps={{
                        ...params.InputProps,
                        type: 'text',
                    }}
                />)}
        /></>);
}

export default CnpjInput;
