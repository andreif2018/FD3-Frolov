import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

    static propTypes = {
        show: PropTypes.number.isRequired,
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            lastName: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            otchestvo: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
            status: PropTypes.bool.isRequired,
        }),
    };

    state = {
        info: this.props.info
    };

    componentWillReceiveProps = (newProps) => {
        console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
        this.setState({info:newProps.info});
    };

    getStatusClassName = () => {
        if (this.state.info.status) return "Active";
        else return "Blocked";
    }

    getStatus = () => {
        if (this.state.info.status) return "active";
        else return "blocked";
    }

    editCustomer = () => {
    }

    deleteCustomer = () => {
    }

    getRecordShowRule = () => {
        if (this.props.show === 1 && this.state.info.status) return true; // 1 is show active
        else if (this.props.show === 2 && !this.state.info.status) return true; // 2 show blocked
        else if (this.props.show === 1 && !this.state.info.status) return false;
        else if (this.props.show === 2 && this.state.info.status) return false;
        else return true;
    }

    render() {
        if (this.getRecordShowRule()) {
            console.log("MobileClient id="+this.state.info.id+" render");
            return (
                <tr>
                    <td>{this.state.info.lastName}</td>
                    <td>{this.state.info.firstName}</td>
                    <td>{this.state.info.otchestvo}</td>
                    <td>{this.state.info.balance}</td>
                    <td className={this.getStatusClassName()}>{this.getStatus()}</td>
                    <td><input type="button" value="Редактировать" onClick={this.editCustomer} /></td>
                    <td><input type="button" value="Удалить" onClick={this.deleteCustomer} /></td>
                </tr>
            );
        }
        else return null;
    }

}

export default MobileClient;