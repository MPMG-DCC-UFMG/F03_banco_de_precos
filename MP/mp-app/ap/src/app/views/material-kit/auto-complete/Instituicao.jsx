import * as React from 'react'
import Box from '@material-ui/core/Box'

import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export default function Playground() {
  const [name, setName] = React.useState('Cat in the Hat')
    const handleChange = (event) => {
        setName(event.target.value)
    }

    
    const defaultProps = {
        options: RazaoSocial,
        getOptionLabel: (option) => option.title,
    }

    const flatProps = {
        options: RazaoSocial.map((option) => option.title),
    }

    const [value, setValue] = React.useState(null)

    return (
        <fieldset>
            <legend>Órgão/instituição</legend>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 5, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Autocomplete
                    disablePortal
                    {...defaultProps}
                    id="disable-clo/se-on-select"
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Nome"
                            variant="standard"
                            className="razaoSocial"
                        />
                    )}
                />
            </Box>
        </fieldset>
    )
}

const RazaoSocial = [
    { title: 'Prefeitura A' },
    { title: 'Prefeitura B' },
    { title: 'Prefeitura C' },
    { title: 'Prefeitura D' },
    { title: 'Prefeitura E' },
    { title: 'Prefeitura F' },
    { title: 'Prefeitura G' },
    { title: 'Prefeitura H' },
]
