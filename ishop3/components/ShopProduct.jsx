import React from 'react';
import PropTypes from 'prop-types';

import './ShopProduct.css';

class ShopProduct extends React.Component{

    static propTypes = {
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        urlPhoto: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbDeleted: PropTypes.func.isRequired,
        selectedProductCode: PropTypes.number, // может быть null, пока ни один продукт не выбран
    };
    
    productClicked = function() {
        this.props.cbSelected(this.props.code);
    };

    productDeleted = function() {
        this.props.cbSelected(this.props.code);
         if (confirm("Удалить продукт < " + this.props.productName + " >, Вы уверены ?")) this.props.cbDeleted(this.props.code);
    };

    render() {
        var clsName = (this.props.code === this.props.selectedProductCode) ? "Selected" : "Product";
        return (
            <tr key={this.props.code} className={clsName} onClick={this.productClicked}>
                <td className="Name">{this.props.productName}</td>
                <td className="Price">{this.props.price + " $"}</td>
                <td className="Quantity">{this.props.quantity + " шт"}</td>
                <td className="URL">{this.props.urlPhoto}</td>
                <td className="DeleteButton" onClick={this.productDeleted}>"Delete"</td>
            </tr>
        )

    };
}
export default ShopProduct;