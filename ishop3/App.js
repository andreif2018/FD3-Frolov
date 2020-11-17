"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ShopBlock from './components/ShopBlock';
var shopHeaders = require('./headers.json');
var shopArr = require('./productList.json');
var shopText = "Список товаров в интернет магазине";

ReactDOM.render(
    React.createElement(ShopBlock, { title: shopText, headers: shopHeaders, items: shopArr}),
    document.getElementById("container")
);
