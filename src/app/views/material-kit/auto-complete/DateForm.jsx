import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

function DateForm() {
    const [checkInDate, setCheckInDate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)

    const handleCheckInDate = (date) => {
        setCheckInDate(date)
        setCheckOutDate(null)
    }

    const handleCheckOutDate = (date) => {
        setCheckOutDate(date)
    }

    return (
        <div className="calendario">
            <div className="input-container">
                <div className="dataInicio">
                    <label>Data de início</label>
                    <DatePicker
                        selected={checkInDate}
                        minDate={new Date()}
                        onChange={handleCheckInDate}
                        dateFormat="dd/MM/yyyy"
                        placeholderText={moment(new Date()).format(
                            'DD/MM/YYYY'
                        )}
                        locale="pt"
                    />
                </div>
                <div className="dataFim">
                    <label>Data fim</label>
                    <DatePicker
                        selected={checkOutDate}
                        minDate={checkInDate}
                        onChange={handleCheckOutDate}
                        dateFormat="dd/MM/yyyy"
                        locale="pt"
                    />
                </div>
            </div>
            {}
            {checkInDate && checkOutDate && (
                <div className="summary">
                    <p className="summary">
                        Período selecionado{' '}
                        {(moment(checkOutDate) - moment(checkInDate)) /
                            (1000 * 60 * 60 * 24)}{' '}
                        dia(s).
                    </p>
                </div>
            )}
        </div>
    )
}

export default DateForm
