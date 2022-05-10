import { Close } from '@mui/icons-material';
import { Card, CardContent, CircularProgress, IconButton, Modal, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { queryStringConverter } from '../services/apiRequest';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import Chart from './Chart';
import DetailInfo from './DetailInfo';

type Props = {
    open: boolean,
    selectedData: any,
    onClose: (() => void)
}

const toCurrency = (num: number) => num.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" });

function Detail({ open, onClose, selectedData }: Props) {
    const { description } = useContext(GlobalStateContext);

    const { data, error, loading } = useFetch(endpoints.CHARTS, queryStringConverter({
        description: selectedData.original || description,
        unit_measure: selectedData.dsc_unidade_medida,
        year: selectedData.ano,
        limit: 1000
    }))


    return (<Modal open={open} onClose={() => onClose()}>
        <div className="w-full h-full overflow-auto py-8 flex items-center justify-center">
            <Card className='w-full max-w-6xl'>
                <CardContent>
                    <div className="flex">
                        <div className="flex-1">
                            <Typography variant='h4'>Detalhamento</Typography>
                        </div>
                        <div className="flex-1 text-right">
                            <IconButton onClick={onClose}>
                                <Close />
                            </IconButton>
                        </div>
                    </div>

                    {loading || !data
                        ? <CircularProgress />
                        : <>
                            <div className="my-4">
                                <Typography variant='h5'>{selectedData.original || description}</Typography>
                                {selectedData.dsc_unidade_medida ? <Typography variant='subtitle1'>Descrição de medida: {selectedData.dsc_unidade_medida}</Typography> : null}
                                {selectedData.ano ? <Typography variant='subtitle1'>Ano: {selectedData.ano}</Typography> : null}
                            </div>

                            <div className="my-4 grid grid-cols-4 gap-4">
                                <DetailInfo number={selectedData.count} label='Qtd de itens' color="bg-orange-500" />
                                <DetailInfo number={toCurrency(selectedData.mean)} label='Preço Médio' color="bg-purple-500" />
                                <DetailInfo number={toCurrency(selectedData.min)} label='Preço Mínimo' color="bg-green-500" />
                                <DetailInfo number={toCurrency(selectedData.max)} label='Preço Máximo' color="bg-yellow-500" />
                            </div>

                            <div className="my-4 grid grid-cols-2 gap-4">
                                <Chart field="qtde_item" type='sum' color="#22C55E" label="Relação de Itens" axisName='Qtd. de Itens' data={data} />
                                <Chart field="mean_preco" type="avg" color="#EAB308" label="Relação de Preços" axisName='Preço' data={data} />
                            </div>
                        </>
                    }

                </CardContent>
            </Card>
        </div>
    </Modal>);
}

export default Detail;
