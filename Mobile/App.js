"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[
    {id:101, lastName:"Иванов", firstName: "Иван", otchestvo: "Иванович", balance:200},
    {id:102, lastName:"Сидоров", firstName: "Сидор", otchestvo: "Сидорович", balance:200},
    {id:103, lastName:"Петров", firstName: "Петр", otchestvo: "Петрович", balance:200},
    {id:104, lastName:"Григорьев", firstName: "Григорий", otchestvo: "Григорьевич", balance:200},
];

let headers = [
    {code:1, header: "Фамилия"},
    {code:2, header: "Имя"},
    {code:3, header: "Отчество"},
    {code:4, header: "Баланс"},
    {code:5, header: "Статус"},
    {code:6, header: "Редактировать"},
    {code:7, header: "Удалить"},
    ];

ReactDOM.render(
    <MobileCompany
        name={companyName}
        headers = {headers}
        clients={clientsArr}
    />
    , document.getElementById('container')
);