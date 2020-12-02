"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ShopBlock from './components/ShopBlock';
import shopHeaders from './headers.json';
import shopArr from './productList.json';
var shopText = "Список товаров в интернет магазине";

ReactDOM.render(
    <ShopBlock title={shopText} headers={shopHeaders} items={shopArr}/>, document.getElementById('container')
);