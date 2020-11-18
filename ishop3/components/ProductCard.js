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

    state = {
        replyName: null,
        replyPrice: null,
        replyUrl: null,
        replyQuantity: null,
    };

    validateName = (EO) => { // длина названия не более 15 символов и не пустое
        var nameValue = EO.target.value;
        if ( nameValue.length > 15) this.setState({replyName: 'текст должен быть не более 15 символов!'}, this.render);
        else if ( nameValue.length === 0) this.setState({replyName: 'поле не должно быть пустым'}, this.render);
        else this.setState({replyName: null}, this.render);
    }

    validatePrice = (EO) => { // price не может быть пустой, должен быть в диапазоне от 1 до 1000
        var priceValue = EO.target.value;
        if ( priceValue > 1000 || priceValue < 1 ) this.setState({replyPrice: 'цена должна быть в диапазоне от 1 до 1000'}, this.render);
        else if ( priceValue === "") this.setState({replyPrice: 'цена должна быть в диапазоне от 1 до 1000'}, this.render);
        else this.setState({replyPrice: null}, this.render);
    }

    validateUrl = (EO) => { // url не может быть пустой и должен соответствовать общим правилам url
        var urlValue = EO.target.value;
        let re = /^[a-z0-9\/.]{1,25}$/; //url может содержать латинские буквы в нижнем регистре, цифры, точку и слэш, длина поля не более 25 символов
        if ( urlValue === "") this.setState({replyUrl: 'поле не должно быть пустым'}, this.render);
        else if (re.test(urlValue) === false) this.setState({replyUrl: 'допустимо не более 25 символов из: a-z,0-9,\"/\",\".\"'}, this.render);
        else this.setState({replyUrl: null}, this.render);
    }

    validateQuantity = (EO) => { // quantity не может быть пустой, должен быть в диапазоне от 1 до 100
        var quantityValue = EO.target.value;
        if ( quantityValue > 12 || quantityValue < 1 ) this.setState({replyQuantity: 'количество должно быть в диапазоне от 1 до 12'}, this.render);
        else if ( quantityValue === "") this.setState({replyQuantity: 'количество должно быть в диапазоне от 1 до 12'}, this.render);
        else this.setState({replyQuantity: null}, this.render);
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
        else if (this.props.mode === 2) { // режим редактирования
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