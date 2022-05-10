import { Typography } from '@mui/material';
import React from 'react';

type Props = {
    number: string,
    label: string,
    color?: string,
}

function DetailInfo({ number, label, color }: Props) {
    return (<div className='rounded shadow text-center p-2'>
        <Typography variant='h5'>{number}</Typography>
        <Typography variant='caption'>{label}</Typography>
        <div className={`${color || 'bg-red-500'} h-0.5 mt-2`}></div>
    </div>);
}

export default DetailInfo;
