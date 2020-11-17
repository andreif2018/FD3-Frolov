import React from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';
import ShopProduct from './ShopProduct';

class ShopBlock extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        headers: PropTypes.array.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                productName: PropTypes.string.isRequired,
                code: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                urlPhoto: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ),
    };

    state = {
        selectedProductCode: null,
        products: this.props.items,

    };

    productSelected = function (code) {
        console.log('выбран продукт с кодом ' + code);
        this.setState({selectedProductCode: code});
    };

    productDeleted = function (code) {
        var self = this;
        this.setState({
            products: self.state.products.filter((v) => {
                return v.code !== code
            })
        });
    };

    render() {
        var headerLine = []; // формирование заголовков таблицы
        this.props.headers.forEach((element) => {
            var header = <th key={element.code}>{element.header}</th>
            headerLine.push(header);
        });

        var itemsCode = [];
        this.state.products.forEach((v) => { // формирование строк таблицы
            var element = React.createElement(ShopProduct, {
                key: v.code,
                productName: v.productName, code: v.code, price: v.price,
                urlPhoto: v.urlPhoto, quantity: v.quantity,
                cbSelected: this.productSelected,
                selectedProductCode: this.state.selectedProductCode,
                cbDeleted: this.productDeleted,
            });
            itemsCode.push(element);
        });

        return (
            <table className="ShopBlock">
                <thead>
                <tr>
                    <th className="Title" colSpan="5">{this.props.title}</th>
                </tr>
                <tr>{headerLine}</tr>
                </thead>
                <tbody>{itemsCode}</tbody>
            </table>
        )
    }
}
export default ShopBlock;