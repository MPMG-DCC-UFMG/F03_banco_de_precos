import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import  FormControl  from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup row aria-label="agrupamento" name="agrupamento"  >
        <FormControlLabel value="descricao" control={<Radio />} label="Descrição" />
        <FormControlLabel value="unidade" control={<Radio />} label="Unidade de Medida" />
        <FormControlLabel value="ano" control={<Radio />} label="Ano" />
        <FormControlLabel value="item" control={<Radio />} label="Grupo do Item" />
        
      </RadioGroup>
    </FormControl>
  );
}
