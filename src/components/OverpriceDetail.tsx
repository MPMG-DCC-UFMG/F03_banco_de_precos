import { Close } from '@mui/icons-material';
import { Card, CardContent, IconButton, Modal, TextField, Typography } from '@mui/material';
import OverpriceTable from './OverpriceTable';

type Props = {
    open: boolean,
    selectedData: any,
    onClose: (() => void)
}

function OverpriceDetail({ open, onClose, selectedData }: Props) {


    return (<Modal open={open} onClose={() => onClose()}>
        <div className="w-full h-full overflow-auto py-8 flex items-center justify-center">
            <Card className='w-full max-w-6xl'>
                <CardContent>
                    <div className="flex">
                        <div className="flex-1">
                            <Typography variant='h4'>Cálculo de Sobrepreço</Typography>
                        </div>
                        <div className="flex-1 text-right">
                            <IconButton onClick={onClose}>
                                <Close />
                            </IconButton>
                        </div>
                    </div>
                    <div>
                        {selectedData.group_size < 10
                            ? <div className='p-4 bg-red-100 border border-red-200 text-center my-4'>
                                O grupo é pequeno demais para gerar estatísticas de preço
                            </div>
                            : <OverpriceTable
                                data={selectedData.data}
                                avg_preco={selectedData.avg_preco}
                                max_preco={selectedData.max_preco}
                                min_preco={selectedData.min_preco}
                                std_preco={selectedData.std_preco}
                            />
                        }
                    </div>
                </CardContent>
            </Card>
        </div>
    </Modal>);
}

export default OverpriceDetail;
