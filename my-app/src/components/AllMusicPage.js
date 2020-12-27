import React from 'react';
import './AboutUsPage.css';
import headers from '/src/headers.json';
import items from '/src/songList.json';

class AboutUsPage extends React.PureComponent {

    render() {
        let headerLine = headers.map((element) => <th key={element.code}>{element}</th>);/* формирование заголовков таблицы */
        return (
            <table className="ShopBlock">
                <thead>
                    <tr>{headerLine}</tr>
                </thead>
                <tbody>{itemsCode}</tbody>
            </table>
        );
    }
}

export default AboutUsPage;