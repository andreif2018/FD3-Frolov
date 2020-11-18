import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component{

    static propTypes = {
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        urlPhoto: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        mode: PropTypes.number.isRequired
    };

    render() {
        if (this.props.mode === 1) { // режим просмотра
            return (
                <div className="ProductCard">
                    <div className="Name">{this.props.productName}</div>
                    <div className="Price">{this.props.price + " $"}</div>
                    <div className="Quantity">{this.props.quantity + " шт"}</div>
                    <div className="URL">{this.props.urlPhoto}</div>
                </div>
            )
        }
        else if (this.props.mode === 2) { // режим редактирования
            return (
                <div className="ProductCard">
                    <span>Edit existing Product</span><br/><br/>
                    <label htmlFor="cardId">Product ID:</label>
                    <input type="text" name="cardId" defaultValue={this.props.code} readOnly/><br/><br/>
                    <label htmlFor="pname">Product name:</label>
                    <input type="text" name="pname" defaultValue={this.props.productName}/><br/><br/>
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" defaultValue={this.props.price}/><br/><br/>
                    <label htmlFor="amount">Quantity:</label>
                    <input type="number" name="amount" defaultValue={this.props.quantity}/><br/><br/>
                    <label htmlFor="url">Url:</label>
                    <input type="text" name="url" defaultValue={this.props.urlPhoto}/><br/><br/>
                    <button>Save</button><button>Cancel</button>
                </div>
                );
        }

    };
}
export default ProductCard;