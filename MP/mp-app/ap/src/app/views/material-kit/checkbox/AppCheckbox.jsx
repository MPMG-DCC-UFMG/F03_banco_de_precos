import React from 'react'
import SimpleCheckbox from './SimpleCheckbox'
import LabelledCheckbox from './LabelledCheckbox'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppCheckbox = () => {
    return (
        <div className="m-sm-30">
            <div className="py-3" />
            <SimpleCard >
                <LabelledCheckbox />
            </SimpleCard>
        </div>
    )
}

export default AppCheckbox
