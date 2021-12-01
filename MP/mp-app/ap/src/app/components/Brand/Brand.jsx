import React from 'react'
import { MatxLogo } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    brand: {
        padding: '20px 18px 20px 29px',
    },
    hideOnCompact: {
        display: 'none',
    },
}))

const Brand = ({ children }) => {
    const classes = useStyles()
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <div
            className={clsx('flex items-center justify-between', classes.brand)}
        >
            <div className="flex items-center">
                <img
                    className="w-full"
                    src="/assets/images/illustrations/Logo_mpmg.png"
                    alt=""
                    width="50"
                    height="50"
                />
                <span
                    className={clsx({
                        'text-18 ml-2 font-medium sidenavHoverShow': false,
                        [classes.hideOnCompact]: mode === 'compact',
                    })}
                >
                    
                </span>
            </div>
            <div
                className={clsx({
                    sidenavHoverShow:false ,
                    [classes.hideOnCompact]: mode === 'compact',
                })}
            >
                {children || null}
            </div>
        </div>
    )
}

export default Brand
