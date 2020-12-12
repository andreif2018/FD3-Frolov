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

test('нажатие кнопки "Редактировать" в каждой строчке таблицы', () => {

    for (var buttonIndex = 0; buttonIndex < 4; buttonIndex++) {
        const component = renderer.create(
            <MobileCompany headers = {headers} clients={clientsArr}/>
        );
        let componentTree=component.toJSON();
        // найдём в вёрстке компонента саму кнопку
        const buttonElem = component.root.findAll( el => (el.type==='input' && el.props.value === 'Редактировать') )[buttonIndex];
        // и "нажмём" на неё
        buttonElem.props.onClick();
        // получаем уже изменённый снэпшот
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot('UpdateButton.test.js.snap');// режим редактирования

        // найдем поле LastName
        const field = component.root.findAll( el => (el.type==='input' && el.props.type === 'text') )[buttonIndex];
        field.setValue("new" + buttonIndex.toString()); // внесем изменения

        // найдем кнопку сохранить в соответствующей строчке
        const saveButton = component.root.findAll( el => (el.type==='input' && el.props.value === 'Сохранить') )[buttonIndex];
        saveButton.props.onClick(); // нажмем для сохранения
        // получаем уже изменённый снэпшот
        componentTree=component.toJSON();
        expect(componentTree).toMatchSnapshot('UpdateButton.test.js.snap');
    }
});