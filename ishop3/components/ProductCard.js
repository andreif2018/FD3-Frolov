"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';


class ProductCard extends React.Component{

    static propTypes = {
        productName: PropTypes.string,
        code: PropTypes.number.isRequired,
        price: PropTypes.number,
        urlPhoto: PropTypes.string,
        quantity: PropTypes.number,
        mode: PropTypes.number.isRequired,
        cbUpdated: PropTypes.func.isRequired,
        cbChanged: PropTypes.func.isRequired,
        cbCanceled: PropTypes.func.isRequired,
    };

    state = {
        nameError: null,
        priceError: null,
        urlError: null,
        quantityError: null,
        newName: this.props.productName,
        newPrice: this.props.price,
        newUrl: this.props.urlPhoto,
        newQuantity: this.props.quantity,
        isValidCard: false,
    };

    cancelCardView = () => {
        this.props.cbCanceled(this.props.code);
    };

    productUpdated = () => {
        var updatedItem = {
            productName: this.state.newName,
            code: this.props.code,
            price: this.state.newPrice,
            urlPhoto: this.state.newUrl,
            quantity: this.state.newQuantity,
        }
        this.props.cbUpdated(updatedItem);
    };

    productChanged = () => {
        if (this.props.mode === 2) { // режим редактирования
            this.props.cbChanged(this.props.code);
        }
        var validity = (this.state.nameError === null && this.state.priceError === null && this.state.urlError === null
            && this.state.quantityError === null &&// прошли ли валидацию все поля ввода
            this.state.newName !== null && this.state.newPrice !== null && this.state.newUrl !== null &&
            this.state.newQuantity !== null);
        this.setState({isValidCard: validity}, this.render);
    };

    validateName = (EO) => { // длина названия не более 15 символов и не пустое
        var nameValue = EO.target.value;
        if ( nameValue.length > 15) this.setState({nameError: 'should be text of 15 chars maximum length'}, this.productChanged);
        else if ( nameValue.length === 0) this.setState({nameError: 'field can not be empty'}, this.productChanged);
        else {
            if (nameValue !== this.props.productName) this.setState({newName: nameValue}, this.productChanged);
            this.setState({nameError: null}, this.productChanged);
        }
    }

    validatePrice = (EO) => { // price не может быть пустой, должен быть в диапазоне от 1 до 1000
        var priceValue = EO.target.value;
        if (priceValue === null) this.setState({priceError: 'number in ratio from 1 up to 2000'}, this.productChanged);
        else if ( priceValue > 2000 || priceValue < 1 ) this.setState({priceError: 'number in ratio from 1 up to 2000'}, this.productChanged);
        else {
            if (parseInt(priceValue) !== this.props.price) this.setState({newPrice: parseInt(priceValue)}, this.productChanged);
            this.setState({priceError: null}, this.productChanged);
        }
    }

    validateUrl = (EO) => {
        var urlValue = EO.target.value;
        let re = /^[a-z0-9\/.]{1,25}$/; //url может содержать латинские буквы в нижнем регистре, цифры, точку и слэш, длина поля не более 25 символов
        if (re.test(urlValue) === false) this.setState({urlError: 'up to 25 length, chars in ratio: a-z,0-9,\"/\",\".\"'}, this.productChanged);
        else if ( urlValue.length === 0) this.setState({urlError: 'field can not be empty'}, this.productChanged);
        else {
            if (urlValue !== this.props.urlPhoto) this.setState({newUrl: urlValue}, this.productChanged);
            this.setState({urlError: null}, this.productChanged);
        }
    }

    validateQuantity = (EO) => { // quantity не может быть пустой, должен быть в диапазоне от 1 до 100
        var quantityValue = EO.target.value;
        if (quantityValue === null) this.setState({quantityError: 'number in ratio from 1 up to 12'}, this.productChanged);
        else if ( quantityValue > 12 || quantityValue < 1 ) this.setState({quantityError: 'number in ratio from 1 up to 12'}, this.productChanged);
        else {
            if (parseInt(quantityValue) !== this.props.quantity) this.setState({newQuantity: parseInt(quantityValue)}, this.productChanged);
            this.setState({quantityError: null}, this.productChanged);
        }
    }

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
        else if (this.props.mode === 2 || this.props.mode === 3) { // режим редактирования 2 либо обновления 3
            return (
                <div className="ProductCard">
                    <span className="Title">Edit existing Product</span><br/><br/>
                    <span>Product ID: {this.props.code}</span><br/><br/>
                    <label htmlFor="pname">Product name</label>
                    <input type="text" name="pname" defaultValue={this.props.productName} onChange={this.validateName}/>
                    <span className="Reply">{this.state.nameError}</span><br/><br/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" defaultValue={this.props.price} onChange={this.validatePrice}/>
                    <span className="Reply">{this.state.priceError}</span><br/><br/>
                    <label htmlFor="url">Url</label>
                    <input type="text" name="url" defaultValue={this.props.urlPhoto} onChange={this.validateUrl}/>
                    <span className="Reply">{this.state.urlError}</span><br/><br/>
                    <label htmlFor="amount">Quantity</label>
                    <input type="number" name="amount" defaultValue={this.props.quantity} onChange={this.validateQuantity}/>
                    <span className="Reply">{this.state.quantityError}</span><br/><br/>
                    <input type="button" value="Save" onClick={this.productUpdated} disabled={!this.state.isValidCard}/>
                    <input type="button" value="Cancel" onClick={this.cancelCardView}/>
                </div>
            );
        }
        else { // режим добавления mode = 4
            return (
                <div className="ProductCard">
                    <span className="Title">Adding New Product</span><br/><br/>
                    <span>Product ID: {this.props.code}</span><br/><br/>
                    <label htmlFor="pname">Product name</label>
                    <input type="text" name="pname" defaultValue={this.props.productName} onChange={this.validateName}/>
                    <span className="Reply">{this.state.nameError}</span><br/><br/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" defaultValue={this.props.price} onChange={this.validatePrice}/>
                    <span className="Reply">{this.state.priceError}</span><br/><br/>
                    <label htmlFor="url">Url</label>
                    <input type="text" name="url" defaultValue={this.props.urlPhoto} onChange={this.validateUrl}/>
                    <span className="Reply">{this.state.urlError}</span><br/><br/>
                    <label htmlFor="amount">Quantity</label>
                    <input type="number" name="amount" defaultValue={this.props.quantity} onChange={this.validateQuantity}/>
                    <span className="Reply">{this.state.quantityError}</span><br/><br/>
                    <input type="button" value="Add" onClick={this.productUpdated} disabled={!this.state.isValidCard}/>
                    <input type="button" value="Cancel" onClick={this.cancelCardView}/>
                </div>
            )
        }
    };
}
export default ProductCard;