import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
//import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    return (
        <div className="customDatePickerWidth">
            <DatePicker
                customStyles={{ dateInput: { borderWidth: 0 } }}
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    )
}


