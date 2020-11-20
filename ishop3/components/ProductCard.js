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
    };

    state = {
        replyName: null,
        replyPrice: null,
        replyUrl: null,
        replyQuantity: null,
    };

    productUpdated = () => {
        this.props.cbUpdated(this.props.code);
    };

    validateName = (EO) => { // длина названия не более 15 символов и не пустое
        var nameValue = EO.target.value;
        if ( nameValue.length > 15) this.setState({replyName: 'should be text of 15 chars maximum length'}, this.render);
        else if ( nameValue.length === 0) this.setState({replyName: 'field can not be empty'}, this.render);
        else {
            if (nameValue !== this.props.productName) this.productUpdated();
            this.setState({replyName: null}, this.render);
        }
    }

    validatePrice = (EO) => { // price не может быть пустой, должен быть в диапазоне от 1 до 1000
        var priceValue = EO.target.value;
        if ( priceValue > 1000 || priceValue < 1 ) this.setState({replyPrice: 'number in ratio from 1 up to 1000'}, this.render);
        else if ( priceValue === "") this.setState({replyPrice: 'number in ratio from 1 up to 1000'}, this.render);
        else {
            if (priceValue !== this.props.price) this.productUpdated();
            this.setState({replyPrice: null}, this.render);
        }
    }

    validateUrl = (EO) => { // url не может быть пустой и должен соответствовать общим правилам url
        var urlValue = EO.target.value;
        let re = /^[a-z0-9\/.]{1,25}$/; //url может содержать латинские буквы в нижнем регистре, цифры, точку и слэш, длина поля не более 25 символов
        if ( urlValue === "") this.setState({replyUrl: 'field can not be empty'}, this.render);
        else if (re.test(urlValue) === false) this.setState({replyUrl: 'up to 25 length, chars in ratio: a-z,0-9,\"/\",\".\"'}, this.render);
        else {
            if (urlValue !== this.props.urlPhoto) this.productUpdated();
            this.setState({replyPrice: null}, this.render);
        }
    }

    validateQuantity = (EO) => { // quantity не может быть пустой, должен быть в диапазоне от 1 до 100
        var quantityValue = EO.target.value;
        if ( quantityValue > 12 || quantityValue < 1 ) this.setState({replyQuantity: 'number in ratio from 1 up to 12'}, this.render);
        else if ( quantityValue === "") this.setState({replyQuantity: 'number in ratio from 1 up to 12'}, this.render);
        else {
            if (quantityValue !== this.props.quantity) this.productUpdated();
            this.setState({replyPrice: null}, this.render);
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
        else if (this.props.mode === 4) { // режим добавления
            return (
                <div className="ProductCard">
                    <span className="Title">Adding New Product</span><br/><br/>
                    <span>Product ID: {this.props.code}</span><br/><br/>
                    <label htmlFor="pname">Product name</label>
                    <input type="text" name="pname" defaultValue="" onChange={this.validateName}/>
                    <span className="Reply">{this.state.replyName}</span><br/><br/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" defaultValue="" onChange={this.validatePrice}/>
                    <span className="Reply">{this.state.replyPrice}</span><br/><br/>
                    <label htmlFor="url">Url</label>
                    <input type="text" name="url" defaultValue="" onChange={this.validateUrl}/>
                    <span className="Reply">{this.state.replyUrl}</span><br/><br/>
                    <label htmlFor="amount">Quantity</label>
                    <input type="number" name="amount" defaultValue="" onChange={this.validateQuantity}/>
                    <span className="Reply">{this.state.replyQuantity}</span><br/><br/>
                    <input type="button" value="Add"
                           disabled={this.state.replyName!==null||this.state.replyPrice!==null||this.state.replyUrl!==null||this.state.replyQuantity!==null}/>
                    <input type="button" value="Cancel"/>
                </div>
            )
        }
        else { // режим редактирования 2 либо обновления 3
            return (
                <div className="ProductCard">
                    <span className="Title">Edit existing Product</span><br/><br/>
                    <span>Product ID: {this.props.code}</span><br/><br/>
                    <label htmlFor="pname">Product name</label>
                    <input type="text" name="pname" defaultValue={this.props.productName} onChange={this.validateName}/>
                    <span className="Reply">{this.state.replyName}</span><br/><br/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" defaultValue={this.props.price} onChange={this.validatePrice}/>
                    <span className="Reply">{this.state.replyPrice}</span><br/><br/>
                    <label htmlFor="url">Url</label>
                    <input type="text" name="url" defaultValue={this.props.urlPhoto} onChange={this.validateUrl}/>
                    <span className="Reply">{this.state.replyUrl}</span><br/><br/>
                    <label htmlFor="amount">Quantity</label>
                    <input type="number" name="amount" defaultValue={this.props.quantity} onChange={this.validateQuantity}/>
                    <span className="Reply">{this.state.replyQuantity}</span><br/><br/>
                    <input type="button" value="Save"
                     disabled={this.state.replyName!==null||this.state.replyPrice!==null||this.state.replyUrl!==null||this.state.replyQuantity!==null}/>
                    <input type="button" value="Cancel"/>
                </div>
                );
        }
    };
}
export default ProductCard;