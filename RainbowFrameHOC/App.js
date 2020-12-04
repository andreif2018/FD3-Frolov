"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import withRainbowFrame from "./components/withRainbowFrame";
import RainbowFrame from "./components/RainbowFrame";

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedFragment = withRainbowFrame(colors)(RainbowFrame);
ReactDOM.render(
    <FramedFragment colors={colors}>
        Hello!
    </FramedFragment>, document.getElementById('container')
);