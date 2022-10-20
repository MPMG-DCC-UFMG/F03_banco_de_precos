import { Tooltip } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { toCurrency } from '../utils/helpers';

type Props = {
    avg_preco: number;
    max_preco: number;
    min_preco: number;
    std_preco: number;
    unit_preco: number;
}

type ValueProps = {
    price: number;
    left: number;
    pos?: "top" | "bottom"
}


function OverpriceChartValue({ price, left, pos }: ValueProps) {
    return <div className={`text-smm absolute ${pos == "top" ? "-top-4" : "-bottom-4"} text-center w-16 -ml-8`} style={{ left: `${left}%` }}>
        {toCurrency(price)}
    </div>
}


function OverpriceChart({ avg_preco, max_preco, min_preco, std_preco, unit_preco }: Props) {

    const greenWidth = () => (avg_preco - std_preco - min_preco) / (max_preco) * 100;
    const yellowWidth = () => (std_preco * 2) / (max_preco) * 100;
    const blackWidth = () => unit_preco / max_preco * 100;
    const redWidth = () => 100 - yellowWidth() - greenWidth();
    const avgPos = () => ((avg_preco - min_preco) / (max_preco)) * 100;

    const tooltipContainer = document.getElementById("tooltip-container")

    return (<div className='w-full px-4'>

        {tooltipContainer && ReactDOM.createPortal(
            <ReactTooltip />,
            tooltipContainer
        )}

        <div className='h-5 w-full flex relative bg-red-600'>

            <div data-tip={toCurrency(unit_preco)} className="absolute w-1 h-2 bg-black z-10 mt-1.5 hover:opacity-70 " style={{ width: `${blackWidth()}%` }}></div>
            <div data-tip={toCurrency(avg_preco)} className="absolute w-1 h-3 bg-white z-20 mt-1 -ml-0.5 hover:opacity-70" style={{ left: `${avgPos()}%` }}></div>
            <div data-tip={toCurrency(avg_preco - std_preco)} className="bg-green-600 h-full hover:opacity-80" style={{ width: `${greenWidth()}%` }}></div>
            <div data-tip={toCurrency(avg_preco + std_preco)} className="bg-yellow-500 h-full hover:opacity-80" style={{ width: `${yellowWidth()}%` }}></div>

            <OverpriceChartValue price={min_preco} left={0} />
            <OverpriceChartValue price={max_preco} left={100} />
        </div>
    </div>);
}

export default OverpriceChart;
