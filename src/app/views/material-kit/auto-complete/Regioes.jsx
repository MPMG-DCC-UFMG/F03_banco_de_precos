import React from 'react'
import MultiLevelSelect from 'react-multi-level-selector'

const options = [
    {
        
        value: 'Mesoregião',
        label: 'Mesoregião',
        options: [
            { value: 'dublin', label: 'São João Del Rey' },
            { value: 'new york', label: 'Ouro Preto' },
            { value: 'san fransis', label: 'Tiradentes' },
        ],
    },
    {
        value: 'Microregião',
        label: 'Microregião',
        options: [
            { value: 'dublin', label: 'Belo Horizonte' },
            { value: 'new york', label: 'Montes Claros' },
            { value: 'san fransis', label: 'Contagem' },
        ],
    },
]
function Cidades() {
    return (
        <div class="cidades">
            <MultiLevelSelect options={options} />
        </div>
    )
}

export default Cidades
