"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ShopBlock from './components/ShopBlock';

var shopText = "Список товаров в интернет магазине";
var shopHeaders = [
    {code:1, header: "Name"},
    {code:2, header: "Price"},
    {code:3, header: "Quantity"},
    {code:4, header: "URL"},
    {code:5, header: "Control"},
    ];
var shopArr = [
    {productName: "гитара", code:1, price: 999, urlPhoto: "images/guitar.jpg", quantity: 3 },
    {productName: "клавиши", code:2, price: 1200, urlPhoto: "images/piano.jpg", quantity:5 },
    {productName: "саксофон", code:3, price: 1000, urlPhoto: "images/saxophone2.jpg", quantity: 7 },
    {productName: "ударные", code:4, price: 700, urlPhoto: "images/percussion.jpg", quantity: 4 },
    {productName: "скрипка", code:5, price: 850, urlPhoto: "images/violin.jpg", quantity: 2 }
];

ReactDOM.render(
    React.createElement(ShopBlock, { title: shopText, headers: shopHeaders, items: shopArr}),
    document.getElementById("container")
);
