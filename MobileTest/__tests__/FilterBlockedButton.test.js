"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

let clientsArr = [
    {id:101, lastName:"Иванов", firstName: "Иван", otchestvo: "Иванович", balance: 200, status: true},
    {id:102, lastName:"Сидоров", firstName: "Сидор", otchestvo: "Сидорович", balance: 250, status: true},
    {id:103, lastName:"Петров", firstName: "Петр", otchestvo: "Петрович", balance: 180, status: true},
    {id:104, lastName:"Григорьев", firstName: "Григорий", otchestvo: "Григорьевич", balance: -220, status: false},
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

const component = renderer.create(
    <MobileCompany headers = {headers} clients={clientsArr}/>
);

let componentTree=component.toJSON();

beforeAll(() => {
    expect(componentTree).toMatchSnapshot('FilterAllButton.test.js.snap');
});

test('работа кнопки "Все" при открытии страницы', () => {

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Заблокированные') );
    // и "нажмём" на неё
    buttonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('FilterBlockedButton.test.js.snap');

    // "нажмём" кнопку ещё раз
    buttonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('FilterBlockedButton.test.js.snap');

});

test('работа кнопки "Заблокированные" при изначально отфильтрованной по "Активные" странице', () => {

    // найдём в вёрстке компонента саму кнопку
    const activeButtonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Активные') );
    // и "нажмём" на неё
    activeButtonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('FilterActiveButton.test.js.snap');

    // "нажмём" кнопку "Заблокированные"
    const blockedButtonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Заблокированные') );
    blockedButtonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('FilterBlockedButton.test.js.snap');

    // "нажмём" кнопку ещё раз
    blockedButtonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('FilterActiveButton.test.js.snap');
});