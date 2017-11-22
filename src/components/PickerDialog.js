import React from 'react'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'

const PickerDialog = ({
    value,
    onClick,
    onChange
    }) => (
        <div style={{ position: 'absolute', zIndex: '2' }}>
            <div
                style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                onClick={onClick}
            />
            <SketchPicker
                color={value}
                onChange={onChange}
            />
        </div>
    )

PickerDialog.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
}

export default PickerDialog