import React from 'react';
import './RainbowFrame.css';

const withRainbowFrame = colors => Component => props => {
    let code = <Component {...props} />;
    colors.forEach( color => {
        code = <div className="RainbowFrame" style={{borderColor:color}}>{code}</div>
    });
    return code;
}
export default withRainbowFrame;