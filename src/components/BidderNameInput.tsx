import { Autocomplete, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useState } from 'react';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { queryStringConverter } from '../services/apiRequest';
import { GlobalStateContext } from '../wrappers/GlobalContext';


function BidderNameInput() {
    const { filters, setFilters } = useContext(GlobalStateContext)
    const { data, error, loading } = useFetch(endpoints.BIDDER, queryStringConverter({ bidder_name: filters.bidder_name }));

    const handleChange = (value: string) => {
        setFilters({
            ...filters,
            bidder_name: value
        });
    };

    const options = () => {
        if (data) {
            return data.map((d: any) => d.bidder_name)
        } else {
            return [];
        }
    }

    return (<>
        <Autocomplete
            options={options()}
            value={filters.bidder_name}
            onInputChange={(event, newInputValue) => {
                handleChange(newInputValue)
            }}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={(event) => handleChange(event.target.value)}
                    label="Fornecedor"
                    required
                    InputProps={{
                        ...params.InputProps,
                        type: 'text',
                    }}
                />)}
        /></>);
}

export default BidderNameInput;
