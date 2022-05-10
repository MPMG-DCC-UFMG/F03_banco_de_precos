import { Autocomplete, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { queryStringConverter } from '../services/apiRequest';
import { GlobalStateContext } from '../wrappers/GlobalContext';


function SearchInput() {
    const { description, setDescription } = useContext(GlobalStateContext)
    const { data, error, loading } = useFetch(endpoints.AUTOCOMPLETE, queryStringConverter({ desc: description }));

    const options = () => {
        if (data) {
            return data.map((d: any) => d.desc)
        } else {
            return [];
        }
    }

    return (<>
        <Autocomplete
            options={options()}
            onInputChange={(event, newInputValue) => {
                setDescription(newInputValue);
            }}
            value={description}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={(ev) => setDescription(ev.target.value)}
                    label="Digite uma descrição"
                    required
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                />)}
        /></>);
}

export default SearchInput;
