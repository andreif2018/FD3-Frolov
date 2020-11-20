import React from 'react';
import PropTypes from 'prop-types';

import './ProductRecord.css';

class ProductRecord extends React.Component{

    static propTypes = {
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        urlPhoto: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbDeleted: PropTypes.func.isRequired,
        selectedProductCode: PropTypes.number, // может быть null, пока ни один продукт не выбран
        cbEdit: PropTypes.func.isRequired,
        mode: PropTypes.number.isRequired,
    };
    
    productClicked = () => {
        if (this.props.mode === 1 || this.props.mode === 2) this.props.cbSelected(this.props.code);
    };

    productDeleted = () => {
        if (this.props.mode !== 3)
            if (confirm("Удалить продукт < " + this.props.productName + " >, Вы уверены ?")) this.props.cbDeleted(this.props.code);
    };

    productEdit = () => {
        if (this.props.mode !== 3) {
            this.props.cbSelected(this.props.code);
            this.props.cbEdit(this.props.code);
        }
    };

    render() {
        var clsName = (this.props.code === this.props.selectedProductCode && this.props.mode !== 4) ? "Selected" : "Product";
        return (
            <tr key={this.props.code} className={clsName}>
                <td onClick={this.productClicked}>{this.props.productName}</td>
                <td onClick={this.productClicked}>{this.props.price + " $"}</td>
                <td onClick={this.productClicked}>{this.props.quantity + " шт"}</td>
                <td onClick={this.productClicked}>{this.props.urlPhoto}</td>
                <td className="Control">
                    <input type="button" className="EditButton" onClick={this.productEdit} value="Edit"
                           disabled={this.props.mode===3 || this.props.mode===4}/>
                    <input type="button" className="DeleteButton" onClick={this.productDeleted} value="Delete"
                       disabled={this.props.mode !==1}/>
                </td>
            </tr>
        )

    };
}
export default ProductRecord;