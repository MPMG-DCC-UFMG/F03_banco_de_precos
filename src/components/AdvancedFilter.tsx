import { Close, FilterSharp } from '@mui/icons-material';
import { Button, Card, CardHeader, CardActions, CardContent, Checkbox, FormControlLabel, IconButton, Modal, TextField, Typography, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import SelectSingle from './SelectSingle';
import CnpjInput from './CnpjInput';
import object_nature from '../constants/natureza_objeto.json';
import body_name from '../constants/nome_orgao.json';
import body_type from '../constants/tipo_orgao.json';
import procurement_type from '../constants/tipo_licitacao.json';
import bidder_type from '../constants/tipo_vencedor.json';
import modality from '../constants/modalidade.json';
import cities from '../constants/cities.json';
import BidderNameInput from './BidderNameInput';
import SelectMultiple from './SelectMultiple';
import HelpIcon from '@mui/icons-material/Help';

type Props = {
    open: boolean,
    onClose: (() => void)
}

function AdvancedFilter({ open, onClose }: Props) {

    const { filters, setFilters, cleanFilters } = useContext(GlobalStateContext);

    const handleChangeCheck = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, ...{ [ev.target.name]: ev.target.checked } });
    }

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, ...{ [ev.target.name]: ev.target.value } });
    }

    return (<Modal open={open} onClose={() => onClose()}>
        <div className="w-full h-full flex items-center justify-center">
            <Card className='w-full max-w-3xl relative'>
                <CardHeader
                    title="Busca Avançada"
                    action={
                        <IconButton onClick={(ev) => onClose()}>
                            <Close />
                        </IconButton>
                    }>
                </CardHeader>
                <div className="h-[80vh] overflow-auto">
                    <CardContent>
                        <div className="mb-8">
                            <Typography variant='h5'>Faixa</Typography>

                            <div className="my-4">
                                <Typography variant='subtitle2'>Quantidade Comprada</Typography>
                                <div className="flex gap-4 my-2">
                                    <div className='flex-1'><TextField name="min_amount" value={filters.min_amount} onChange={handleChange} className='w-full' label="Min." variant="outlined" /></div>
                                    <div className='flex-1'><TextField name="max_amount" value={filters.max_amount} onChange={handleChange} className='w-full' label="Máx." variant="outlined" /></div>
                                </div>
                            </div>

                            <div className="my-4">
                                <Typography variant='subtitle2'>Preço Unitário</Typography>
                                <div className="flex gap-4 my-2">
                                    <div className='flex-1'><TextField name="min_homolog_price" value={filters.min_homolog_price} onChange={handleChange} className='w-full' label="Min." variant="outlined" /></div>
                                    <div className='flex-1'><TextField name="max_homolog_price" value={filters.max_homolog_price} onChange={handleChange} className='w-full' label="Máx." variant="outlined" /></div>
                                </div>
                            </div>

                        </div>

                        <div className="my-8">
                            <Typography variant='h5'>Órgão</Typography>
                            <div className="flex gap-4 my-2">
                                <div className='flex-1'>
                                    <SelectSingle filterKey='body' label='Nome do Órgão' options={body_name.children} searchable />
                                </div>
                                <div className='flex-1'>
                                    <SelectSingle filterKey='body_type' label='Tipo de Órgão' options={body_type.children} />
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <Typography variant='h5'>Fornecedor</Typography>
                            <div className="flex gap-4 my-2">
                                <div className='w-1/4'>
                                    <SelectSingle filterKey='bidder_type' label='Tipo' options={bidder_type.children} />
                                </div>
                                <div className='flex-1'>
                                    <BidderNameInput />
                                </div>
                                {filters.bidder_type === 'J' ?
                                    <div className='w-1/4'>
                                        <CnpjInput />
                                    </div>
                                    : null
                                }
                            </div>
                        </div>

                        <div className="my-8">
                            <Typography variant='h5'>Licitação</Typography>
                            <div className="flex gap-4 my-2">
                                <div className='w-2/4'>
                                    <SelectSingle filterKey='procurement_type' label='Tipo de Licitação' options={procurement_type.children} />
                                </div>
                                <div className='flex-1'>
                                    <SelectSingle filterKey='modality' label='Modalidade' options={modality.children} />
                                </div>
                                <div className='flex-1'>
                                    <SelectSingle filterKey='object_nature' label='Natureza' options={object_nature.children} />
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <Typography variant='h5'>Região</Typography>
                            <div className="my-4">
                                <SelectMultiple searchable filterKey='city' label='Municipios' options={cities[0].children.map(opt => opt.label)} />
                            </div>
                            <div className="my-4">
                                <SelectMultiple searchable filterKey='imediate_region' label='Região Imediata' options={cities[4].children.map(opt => opt.label)} />
                            </div>
                            <div className="my-4">
                                <SelectMultiple searchable filterKey='inter_region' label='Região Intermediária' options={cities[5].children.map(opt => opt.label)} />
                            </div>
                        </div>

                        <hr />

                        <div className="mt-8">
                            <Typography variant='h5'>
                                Critérios de Agregação de Resultados
                                <Tooltip title="Agrupar os dados de acordo com um ou mais atributos relacionados ao objeto de forma a obter estatísticas de preço, tais como média, máximo e mínimo. Esse agrupamento pode levar alguns minutos para processar.">
                                    <HelpIcon fontSize="small" color="disabled" />
                                </Tooltip>
                            </Typography>
                            <div className="my-2">
                                <FormControlLabel
                                    label="Descrição"
                                    control={
                                        <Checkbox name='group_by_description' checked={filters.group_by_description} onChange={handleChangeCheck} aria-label='Descrição' />
                                    }
                                />
                                <FormControlLabel
                                    label="Unidade de Medida"
                                    control={
                                        <Checkbox name='group_by_unit_metric' checked={filters.group_by_unit_metric} onChange={handleChangeCheck} aria-label='Unidade de Medida' />
                                    }
                                />
                                <FormControlLabel
                                    label="Ano"
                                    control={
                                        <Checkbox name='group_by_year' checked={filters.group_by_year} onChange={handleChangeCheck} aria-label='Ano' />
                                    }
                                />
                            </div>
                            <div className="my-2">
                                <FormControlLabel
                                    label="Efetuar Cálculo de Sobrepreço"
                                    control={
                                        <Checkbox name='group_by_cluster' checked={filters.group_by_cluster} onChange={handleChangeCheck} aria-label='Ano' />
                                    }
                                />
                            </div>
                        </div>
                    </CardContent>
                </div>
                <CardActions className='justify-end gap-2'>
                    <Button onClick={(ev) => { cleanFilters(); onClose(); }} variant='text'>Resetar</Button>
                    <Button onClick={(ev) => onClose()} variant='contained'>Ok</Button>
                </CardActions>
            </Card>
        </div>
    </Modal >);
}

export default AdvancedFilter;
