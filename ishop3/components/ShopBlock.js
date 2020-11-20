import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';
import ShopProduct from './ShopProduct';
import ProductCard from "./ProductCard";

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
        mode: 1, /* режим просмотра по умолчанию */
    };

    productSelected = (code) => {
        console.log('выбран продукт с кодом ' + code);
        this.setState({selectedProductCode: code});
        this.setState({mode: 1}); /* режим просмотра */
    };

    productDeleted = (code) => {
        var self = this;
        this.setState({
            products: self.state.products.filter((v) => {
                return v.code !== code
            })
        });
    };

    productEdit = (code) => {
        console.log('редактирование продукта с кодом ' + code);
        this.setState({mode: 2}); /*режим редактирования*/
    };

    render() {
        var headerLine = []; /*формирование заголовков таблицы*/
        this.props.headers.forEach((element) => {
            var header = <th key={element.code}>{element.header}</th>
            headerLine.push(header);
        });

        var itemsCode = [];
        this.state.products.forEach((v) => { /*формирование строк таблицы*/
            var element = React.createElement(ShopProduct, {
                key: v.code,
                productName: v.productName,
                code: v.code,
                price: v.price,
                urlPhoto: v.urlPhoto, quantity: v.quantity,
                cbSelected: this.productSelected,
                selectedProductCode: this.state.selectedProductCode,
                cbDeleted: this.productDeleted,
                cbEdit: this.productEdit
            });
            itemsCode.push(element);
        });

        var itemCard = [];
        this.state.products.forEach((v) => { /*формирование карты товара*/
            if (this.state.selectedProductCode === v.code) {
                var element = React.createElement(ProductCard, {
                    key: v.code,
                    productName: v.productName,
                    code: v.code,
                    price: v.price,
                    urlPhoto: v.urlPhoto,
                    quantity: v.quantity,
                    mode: this.state.mode
                });
                itemCard.push(element);
            }
        });
        return (
            <Fragment>
                <table className="ShopBlock">
                    <thead>
                    <tr>
                        <th className="Title" colSpan="5">{this.props.title}</th>
                    </tr>
                    <tr>{headerLine}</tr>
                    </thead>
                    <tbody>{itemsCode}</tbody>
                </table>
                <input type="button" className="NewProduct" value="New Product"/>
                <div>{itemCard}</div>
            </Fragment>
        )
    }
}
export default ShopBlock;