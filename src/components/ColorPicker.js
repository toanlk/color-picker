import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

import PickerDialog from './PickerDialog'
import { DEFAULT_CONVERTER, converters } from '../transformers'

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showPicker: false, value: '' };
    }

    render() {
        return (
            <div>
                <TextField id={this.props.id}
                    name={this.props.name}
                    value={this.state.value}
                    placeholder={this.props.hintText}
                    label={this.props.floatingLabel}
                    onClick={() => this.setShowPicker(true)}
                    onChange={e => {
                        this.setValue(e.target.value)
                        this.onChange(e.target.value)
                    }}
                />
                {this.state.showPicker &&
                    <PickerDialog value={this.state.value}
                        onClick={() => {
                            this.setShowPicker(false)
                            this.onChange(this.state.value)
                        }}
                        onChange={c => {
                            const newValue = converters[this.props.convert](c)
                            this.setValue(newValue)
                            this.onChange(newValue)
                        }}
                    />}
            </div>
        );
    }

    setShowPicker(value) {
        this.setState({ showPicker: !this.state.showPicker });
    }

    setValue(value) {
        this.setState({ value: value });
    }

    onChange(value) {
        this.setState({ value: value });
    }
}

ColorPicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    convert: PropTypes.oneOf(Object.keys(converters))
}

ColorPicker.defaultProps = {
    id: 'color-picker',
    name: 'color-picker',
    hintText: '#333333',
    floatingLabel: 'Color',
    convert: DEFAULT_CONVERTER
}

export default ColorPicker
