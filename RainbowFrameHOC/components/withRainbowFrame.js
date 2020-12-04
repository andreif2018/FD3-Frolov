import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {
        return props => (
            <div className="RainbowFrame" style={{borderColor:colors[0]}}>
                <Component {...props} />
            </div>
        );
    };
}
export default withRainbowFrame;
