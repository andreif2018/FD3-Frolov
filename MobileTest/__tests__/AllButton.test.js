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

// создаём тестовую версию компонента
const component = renderer.create(
    <MobileCompany headers = {headers} clients={clientsArr}/>
);

test('работа кнопки "Все" при открытии страницы', () => {

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

    // найдём в вёрстке компонента саму кнопку
    const buttonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Все') );
    // и "нажмём" на неё
    buttonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

    // "нажмём" кнопку ещё раз
    buttonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

});

test('работа кнопки "Все" при отфильтрованной по "Активные" странице', () => {

    let componentTree = component.toJSON();

    // найдём в вёрстке компонента саму кнопку
    const activeButtonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Активные') );
    // и "нажмём" на неё
    activeButtonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('ActiveButton.test.js.snap');

    const allButtonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Активные') );
    // "нажмём" кнопку
    allButtonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

    // "нажмём" еще раз кнопку
    allButtonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

});

test('работа кнопки "Все" при отфильтрованной по "Заблокированные" странице', () => {

    let componentTree = component.toJSON();

    // найдём в вёрстке компонента саму кнопку
    const blockedButtonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Заблокированные') );
    // и "нажмём" на неё
    blockedButtonElem.props.onClick();

    // получаем уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('BlockedButton.test.js.snap');

    const allButtonElem = component.root.find( el => (el.type==='input' && el.props.value === 'Активные') );
    // "нажмём" кнопку
    allButtonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

    // "нажмём" еще раз кнопку
    allButtonElem.props.onClick();

    // и получаем окончательный снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot('AllButton.test.js.snap');

});