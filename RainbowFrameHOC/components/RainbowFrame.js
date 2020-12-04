import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';
import withRainbowFrame from "./withRainbowFrame";

const RainbowFrame = props => {
    let FramedFragment = withRainbowFrame(props.colors.slice(1))(RainbowFrame);
    if (props.colors.length === 0) return <div>{props.children}</div>;
    else {
        return (
            <FramedFragment colors={props.colors.slice(1)}>
                {props.children}
            </FramedFragment>
        );
    }
}

RainbowFrame.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default RainbowFrame;