import { Close } from '@mui/icons-material';
import { Card, CardContent, CircularProgress, IconButton, Modal, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import endpoints from '../constants/endpoints';
import useFetch from '../hooks/useFetch';
import { queryStringConverter } from '../services/apiRequest';
import { toCurrency } from '../utils/helpers';
import { GlobalStateContext } from '../wrappers/GlobalContext';
import Chart from './Chart';
import DetailInfo from './DetailInfo';
import OverpriceTable from './OverpriceTable';

type Props = {
    open: boolean,
    selectedData: any,
    onClose: (() => void)
}

function Detail({ open, onClose, selectedData }: Props) {
    const { description } = useContext(GlobalStateContext);

    const { data, error, loading } = useFetch(endpoints.CHARTS, queryStringConverter({
        description: selectedData.group_by_description || description,
        unit_measure: selectedData.group_by_unit_metric,
        year: selectedData.group_by_year,
        group: selectedData.group_by_cluster,
        limit: 1000
    }))

    const { data: pricingData, loading: loadingData } = useFetch(endpoints.PRICING, queryStringConverter({
        description: selectedData.group_by_description || description,
        unit_measure: selectedData.group_by_unit_metric,
        year: selectedData.group_by_year,
        group: selectedData.group_by_cluster,
        limit: 1000
    }))

    const getChartData = () => {
        if (selectedData.group_by_cluster)
            return data.charts;
        else
            return data;
    }

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
                                <Typography variant='h5'>{selectedData.group_by_description || description}</Typography>
                                {selectedData.group_by_unit_metric ? <Typography variant='subtitle1'>Descrição de medida: {selectedData.group_by_unit_metric}</Typography> : null}
                                {selectedData.group_by_year ? <Typography variant='subtitle1'>Ano: {selectedData.group_by_year}</Typography> : null}
                            </div>

                            <div className="my-4 grid grid-cols-4 gap-4">
                                <DetailInfo number={selectedData.count} label='Qtd de itens' color="bg-[#30638E]" />
                                <DetailInfo number={toCurrency(selectedData.min)} label='Preço Mínimo' color="bg-[#6A994E]" />
                                <DetailInfo number={toCurrency(selectedData.mean)} label='Preço Médio' color="bg-[#EDAE49]" />
                                <DetailInfo number={toCurrency(selectedData.max)} label='Preço Máximo' color="bg-[#D1495B]" />
                            </div>

                            <div className="my-4 grid grid-cols-2 gap-4">
                                <Chart field="qtde_item" type='sum' color="#003D5B" label="Relação de Itens" axisName='Qtd. de Itens' data={getChartData()} />
                                <Chart field="mean_preco" type="avg" color="#386641" label="Relação de Preços" axisName='Preço' data={getChartData()} />
                            </div>

                            {selectedData.group_by_cluster
                                ?
                                <div className="my-4">
                                    <div className='rounded shadow p-2 max-h-64 overflow-auto'>
                                        {data.items.length < 10
                                            ? <div className='p-4 bg-red-100 border border-red-200 text-center my-4'>
                                                O grupo é pequeno demais para gerar estatísticas de preço
                                            </div>
                                            :
                                            <OverpriceTable
                                                data={data.items}
                                                avg_preco={selectedData.avg_preco}
                                                max_preco={selectedData.max_preco}
                                                min_preco={selectedData.min_preco}
                                                std_preco={selectedData.std_preco}
                                            />
                                        }
                                    </div>
                                </div>
                                : null}
                        </>
                    }

                </CardContent>
            </Card>
        </div>
    </Modal>);
}

export default Detail;
