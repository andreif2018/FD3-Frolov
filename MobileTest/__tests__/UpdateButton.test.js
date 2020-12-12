"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
        expect(componentTree).toMatchSnapshot('UpdateButton.test' + buttonIndex + '.js.snap');// режим редактирования
    }
});

it('check input value', () => {
    let inputLastName = "Changed";
    const wrapper = mount(<MobileCompany headers = {headers} clients={clientsArr}/>);
    wrapper.find({ value: 'Редактировать'}).first().simulate('click');
    expect(wrapper).toMatchSnapshot("editMode");
    wrapper.find({defaultValue: 'Иванов'}).props().value = inputLastName;
    expect(wrapper).toMatchSnapshot("UpdatedLastName");
    console.log(wrapper.find({ value: 'Сохранить'}).value);
    wrapper.find({ value: 'Сохранить'}).simulate('click');
    expect(wrapper).toMatchSnapshot("SavedUpdatedLastName");


    // !!! не верно сохраняет данные
    console.log("не верно сохраняет данные");

});

