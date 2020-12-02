import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

const RainbowFrame = props => {
    if (props.colors.length === 0) return <div>{props.children}</div>
    else return (
            <div className='RainbowFrame' style={{borderColor: props.colors[0]}}>
                <RainbowFrame colors={props.colors.slice(1)}>
                    {props.children}
                </RainbowFrame>
            </div>
        )
}

RainbowFrame.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default RainbowFrame;