import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
var _ = require('lodash');

type ChartData = {
    data: string,
    qtde_item: number,
    mean_preco: number,
    median_preco: number,
    mes: number,
    ano: number,
}

type Props = {
    axisName: string,
    label: string,
    color: string,
    field: keyof ChartData,
    type: "sum" | "avg",
    data: ChartData[]
}

function Chart({ axisName, label, data, color, type, field }: Props) {
    const [groupBy, setGroupBy] = useState<string>("month");

    const convert = (number: string | number): number => typeof number === "string" ? parseFloat(number) : number;

    const groupedData = () => {
        const mapped: { label: string, value: number }[] = data.map((d: ChartData) => (
            { label: groupBy === "month" ? `${d.mes}/${d.ano}` : `${d.ano}`, value: convert(d[field]) }
        ));
        const labels: string[] = _.uniq(mapped.map(d => d.label));
        const response = [];
        for (const label of labels) {
            response.push({
                label: label,
                value: mapped
                    .filter(d => d.label === label)
                    .reduce((prev, current) => type === "sum"
                        ? prev + current.value
                        : (prev + current.value) / 2, 0
                    )
            })
        }
        return response;
    }

    return (<div className='rounded shadow'>
        <div className='border-b mb-4 px-4 py-2 flex items-center'>
            <div className='flex-1'>
                <Typography variant='h6'>{label}</Typography>
            </div>
            <div className='flex-1 text-right'>
                <ToggleButtonGroup
                    value={groupBy}
                    exclusive
                    onChange={(event, newValue) => setGroupBy(newValue)}
                    size="small"
                >
                    <ToggleButton value="month">mês</ToggleButton>
                    <ToggleButton value="year">ano</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>

        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                width={500}
                height={300}
                data={groupedData()}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill={color} name={axisName} />
            </BarChart>
        </ResponsiveContainer>
    </div>);
}

export default Chart;
