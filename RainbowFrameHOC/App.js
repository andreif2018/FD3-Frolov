"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import withRainbowFrame from "./components/withRainbowFrame";
import DoubleButton from "./components/DoubleButton";

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
ReactDOM.render(
    <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</FramedDoubleButton>,
    document.getElementById('container')
);