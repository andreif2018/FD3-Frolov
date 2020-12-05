import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired
    };

    doCallback_1 = () => {
        this.props.cbPressed(1);
    }

    doCallback_2 = () => {
        this.props.cbPressed(2);
    }

    render() {
        console.log(this.props.cbPressed);
        return (
            <Fragment>
                <input type="button" className="DoubleButton" onClick={ this.doCallback_1} value={this.props.caption1}/>
                {this.props.children}
                <input type="button" className="DoubleButton" onClick={ this.doCallback_2 } value={this.props.caption2}/>
            </Fragment>
        )
    }
}

export default DoubleButton;