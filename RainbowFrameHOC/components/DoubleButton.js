import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';
import withRainbowFrame from "./withRainbowFrame";

class DoubleButton extends React.Component {
    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired
    };

    doCallback = (EO) => { this.props.cbPressed(EO.target.value); }

    render() {
        return (
            <Fragment>
                <input type="button" className="DoubleButton" onClick={ this.doCallback} value={this.props.caption1}/>
                {this.props.children}
                <input type="button" className="DoubleButton" onClick={ this.doCallback } value={this.props.caption2}/>
            </Fragment>
        )
    }
}

export default DoubleButton;