import React from 'react'
import ReactMultiSelectCheckboxes from './CheckMeses'
import DateForm from './DateForm'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import './CxBusca.css'

export default function RadioB() {
    const [currentRadioValue, setCurrentValue] = React.useState('on')

    const handleRadioChange = (value) => {
        setCurrentValue(value)
    }
    return (
        <div className="buscadorField">
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                    row
                    aria-label="period"
                    className="row-radio-buttons-group"
                >
                    <FormControlLabel
                        value="on"
                        control={<Radio />}
                        label="Exercício"
                        onChange={(e) => setCurrentValue(e.target.value)}
                        defaultChecked={currentRadioValue === 'on'}
                    />
                    <FormControlLabel
                        value="off"
                        control={<Radio />}
                        label="Período"
                        onChange={(e) => setCurrentValue(e.target.value)}
                        defaultChecked={currentRadioValue === 'off'}
                    />
                </RadioGroup>
            </FormControl>
            {currentRadioValue === 'on' && (
                <div className="buscadorField">
                    <h5 className="buscadorField">
                        Exercício
                    </h5>
                    <input
                        placeholder="2021"
                        type="number"
                        min={2000}
                        max={2030}
                    />
                    <h5 className="buscadorField">
                        {' '}
                        Mês 
                    </h5>
                    <ReactMultiSelectCheckboxes className=""></ReactMultiSelectCheckboxes>
                </div>
            )}

            {currentRadioValue === 'off' && (
                <div>
                    {' '}
                    <DateForm></DateForm>
                </div>
            )}
        </div>
    )
}