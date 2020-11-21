import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './ShopBlock.css';
import ProductRecord from './ProductRecord';
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
        self.setState({
            products: self.state.products.filter((v) => {
                return v.code !== code
            })
        });
    };

    productEdit = (code) => {
        console.log('редактирование продукта с кодом ' + code);
        this.setState({mode: 2}); /* режим редактирования */
    };

    productUpdated = (updatedItem) => {
        console.log('обновлен продукт с кодом ' + updatedItem.code);
        var items = this.state.products.map( (v) => {
            if (v.code === updatedItem.code) return updatedItem;
            else return v;
        });
        this.setState( {products: items, mode: 1} ); //режим просмотра

    };

    productChanged = (code) => {
        console.log('изменения в продукте с кодом ' + code);
        this.setState({mode: 3}); /* режим обновления */
    };

    productNewCard = () => {
        console.log('режим добавления нового продукта');
        this.setState({mode: 4}); /* режим добавления нового продукта */
    };

    getNewProductID = () => {
        return (
            this.props.items.reduce( (r,v,i,a) => {
                if (v.code > r) return v.code;
                else return r;
            }, 0) +1
        )
    };

    render() {
        var headerLine = this.props.headers.map((element) => <th key={element.code}>{element.header}</th>);/* формирование заголовков таблицы */

        var itemsCode = this.state.products.map((v) =>  /* формирование строк таблицы */
            React.createElement(ProductRecord, {
            key: v.code,
            productName: v.productName,
            code: v.code,
            price: v.price,
            urlPhoto: v.urlPhoto, quantity: v.quantity,
            cbSelected: this.productSelected,
            selectedProductCode: this.state.selectedProductCode,
            cbDeleted: this.productDeleted,
            cbEdit: this.productEdit,
            mode: this.state.mode
        }));

        var itemCard = [];/*формирование карты товара*/
        this.state.products.forEach((v) => {
            if (this.state.selectedProductCode === v.code) {
                var element = React.createElement(ProductCard, {
                    key: v.code,
                    productName: v.productName,
                    code: v.code,
                    price: v.price,
                    urlPhoto: v.urlPhoto,
                    quantity: v.quantity,
                    mode: this.state.mode,
                    cbUpdated: this.productUpdated,
                    cbChanged: this.productChanged,
                    cbCanceled: this.productSelected,
                });
                itemCard.push(element);
            }
        });

        var newProductID = this.getNewProductID();
        if (this.state.mode === 4 ) {/* режим добавления нового продукта */
            var elementNew = React.createElement(ProductCard, {/*формирование карты товара*/
                key: newProductID,
                productName: null,
                code: newProductID,
                price: null,
                urlPhoto: null,
                quantity: null,
                mode: this.state.mode,
                cbUpdated: this.productUpdated,
            });
            itemCard.push(elementNew);
        }

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
                <input type="button" className="NewProduct" value="New Product"
                  disabled={this.state.mode !== 1} onClick={this.productNewCard}/>
                <div>{itemCard}</div>
            </Fragment>
        )
    }
}
export default ShopBlock;