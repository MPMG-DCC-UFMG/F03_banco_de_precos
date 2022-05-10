import { Close, FilterSharp } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel, IconButton, Modal, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../wrappers/GlobalContext';

type Props = {
    open: boolean,
    onClose: (() => void)
}

function AdvancedFilter({ open, onClose }: Props) {

    const { filters, setFilters } = useContext(GlobalStateContext);

    const handleChangeCheck = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, ...{ [ev.target.name]: ev.target.checked } });
    }

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, ...{ [ev.target.name]: ev.target.value } });
    }

    return (<Modal open={open} onClose={() => onClose()}>
        <div className="w-full h-full flex items-center justify-center">
            <Card className='w-full max-w-2xl'>
                <CardContent>
                    <div className="flex">
                        <div className="flex-1">
                            <Typography variant='h4'>Busca Avançada</Typography>
                        </div>
                        <div className="flex-1 text-right">
                            <IconButton onClick={(ev) => onClose()}>
                                <Close />
                            </IconButton>
                        </div>
                    </div>

                    <div className="my-8">
                        <Typography variant='h5'>Faixa</Typography>

                        <div className="my-4">
                            <Typography variant='subtitle2'>Quantidade Comprada</Typography>
                            <div className="flex gap-4 my-2">
                                <div className='flex-1'><TextField name="min_amount" value={filters.min_amount} onChange={handleChange} className='w-full' label="Min." variant="outlined" size='small' /></div>
                                <div className='flex-1'><TextField name="max_amount" value={filters.max_amount} onChange={handleChange} className='w-full' label="Máx." variant="outlined" size='small' /></div>
                            </div>
                        </div>

                        <div className="my-4">
                            <Typography variant='subtitle2'>Preço Unitário</Typography>
                            <div className="flex gap-4 my-2">
                                <div className='flex-1'><TextField name="min_homolog_price" value={filters.min_homolog_price} onChange={handleChange} className='w-full' label="Min." variant="outlined" size='small' /></div>
                                <div className='flex-1'><TextField name="max_homolog_price" value={filters.max_homolog_price} onChange={handleChange} className='w-full' label="Máx." variant="outlined" size='small' /></div>
                            </div>
                        </div>

                    </div>

                    <div className="my-8">
                        <Typography variant='h5'>Órgão</Typography>
                        <div className="flex gap-4 my-2">
                            <div className='flex-1'><TextField name="body" value={filters.body} onChange={handleChange} className='w-full' label="Nome do Órgão" variant="outlined" size='small' /></div>
                            <div className='flex-1'><TextField name="body_type" value={filters.body_type} onChange={handleChange} className='w-full' label="Tipo de Licitação" variant="outlined" size='small' /></div>
                        </div>
                    </div>

                    <div className="my-8">
                        <Typography variant='h5'>Fornecedor</Typography>
                        <div className="flex gap-4 my-2">
                            <div className='flex-1'><TextField name="bidder_type" value={filters.bidder_type} onChange={handleChange} className='w-full' label="Tipo" variant="outlined" size='small' /></div>
                            <div className='w-2/4'><TextField name="bidder_name" value={filters.bidder_name} onChange={handleChange} className='w-full' label="Fornecedor" variant="outlined" size='small' /></div>
                            <div className='flex-1'><TextField name="bidder_document" value={filters.bidder_document} onChange={handleChange} className='w-full' label="CNPJ/CPF" variant="outlined" size='small' /></div>
                        </div>
                    </div>

                    <div className="my-8">
                        <Typography variant='h5'>Licitação</Typography>
                        <div className="flex gap-4 my-2">
                            <div className='w-2/4'><TextField name="procurement_type" value={filters.procurement_type} onChange={handleChange} className='w-full' label="Tipo de Licitação" variant="outlined" size='small' /></div>
                            <div className='flex-1'><TextField name="modality" value={filters.modality} onChange={handleChange} className='w-full' label="Modalidade" variant="outlined" size='small' /></div>
                            <div className='flex-1'><TextField name="object_nature" value={filters.object_nature} onChange={handleChange} className='w-full' label="Natureza" variant="outlined" size='small' /></div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Typography variant='h5'>Critérios de Agregação de Resultados</Typography>
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
                    </div>
                </CardContent>
                <CardActions className='justify-end'>
                    <Button onClick={(ev) => onClose()} variant='contained'>Ok</Button>
                </CardActions>
            </Card>
        </div>
    </Modal>);
}

export default AdvancedFilter;
