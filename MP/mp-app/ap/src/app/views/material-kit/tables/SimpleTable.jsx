import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@material-ui/core'

const subscribarList = [
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'4,00',
        despadrao:' 3 ',
        mediana:'1',
        itens:'2',
    },
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'3,00',
        despadrao:' 2 ',
        mediana:'3',
        itens:'3',
    },
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'3,00',
        despadrao:' 1 ',
        mediana:'4',
        itens:'1',
    },
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'2,50',
        despadrao:' 2 ',
        mediana:'4',
        itens:'4',
    },
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'3,5',
        despadrao:'5  ',
        mediana:'3',
        itens:'7',
    },
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'6,2',
        despadrao:'3  ',
        mediana:'3',
        itens:'8',
    },
    {
        descricao: 'Máscara KN95',
        medida: 'cx',
        ano:'2019',
        preco:'2,00',
        despadrao:' 6 ',
        mediana:'1',
        itens:'9',
    },
]

const SimpleTable = () => {
    return (
        <div className="w-full overflow-auto">
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        <TableCell className="px-0">Descrição</TableCell>
                        <TableCell className="px-0">Unid. Medida</TableCell>
                        <TableCell className="px-0">Ano</TableCell>
                        <TableCell className="px-0">Preço Médio</TableCell>
                        <TableCell className="px-0">Desvio Padrão</TableCell>
                        <TableCell className="px-0">Mediana</TableCell>
                        <TableCell className="px-0">Nº Itens </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell className="px-0 capitalize" align="left">
                                {subscriber.descricao}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="left">
                                {subscriber.medida}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="left">
                                {subscriber.ano}
                            </TableCell>
                            <TableCell className="px-0 capitalize">
                                {subscriber.preco}
                            </TableCell>
                            <TableCell className="px-0 capitalize">
                                {subscriber.despadrao}
                            </TableCell>
                            <TableCell className="px-0 capitalize">
                                {subscriber.mediana}
                            </TableCell>
                            <TableCell className="px-0">
                            {subscriber.itens}

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default SimpleTable
