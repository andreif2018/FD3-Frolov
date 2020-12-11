import React from 'react';
import PropTypes from 'prop-types';
import './MobileClient.css';
import {myEvents} from './events';

class MobileClient extends React.PureComponent {

    static propTypes = {
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
        editMode: false,
        info: this.props.info,
        id: this.props.info.id,
        lastName: this.props.info.lastName,
        firstName: this.props.info.firstName,
        otchestvo: this.props.info.otchestvo,
        balance: this.props.info.balance,
        status: this.props.info.status,
    };

    UNSAFE_componentWillReceiveProps = (newProps) => {
        console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
        this.setState({info: newProps.info});
    };

    getStatusClassName = () => {
        if (this.state.status) return "Active";
        else return "Blocked";
    }

    getStatus = () => {
        if (this.state.status) return "active";
        else return "blocked";
    }

    editRecord = () => {
        this.setState({editMode: true});
    }

    deleteRecord = () => {
        myEvents.emit('DeleteRecordButtonClicked', this.props.info.id);
    }

    newLastName = null;
    newFirstName = null;
    newOtchestvo = null;
    newBalance = null;
    newStatus = null;

    inputLastName = React.createRef();

    setLastName = () => {
        this.newLastName = this.inputLastName.current.value;
    };

    inputFirstName = React.createRef();

    setFirstName = () => {
        this.newFirstName = this.inputFirstName.current.value;
    };

    inputOtchestvo = React.createRef();

    setOtchestvo = () => {
        this.newOtchestvo = this.inputOtchestvo.current.value;
    };

    inputBalance = React.createRef();

    setBalance = () => {
        this.newBalance = this.inputBalance.current.value;
        if (parseInt(this.newBalance) < 0) this.newStatus = 0;
        else this.newStatus = 1;
    };

    saveRecord = () => {
        this.setLastName();
        this.setFirstName();
        this.setOtchestvo();
        this.setBalance();
        if (!this.isValidRecord()) alert("Введенные данные некорректные");
        else {
            if ( this.newLastName || this.newFirstName || this.newOtchestvo || this.newBalance)
                this.setState({ lastName: this.newLastName, firstName: this.newFirstName, otchestvo: this.newOtchestvo,
                    balance: this.newBalance, status: this.newStatus, editMode: false});
        }
    }

    isValidRecord = () => {
            return (
                this.inputLastName.current.value.length > 2 &&
                this.inputFirstName.current.value.length > 2 &&
                this.inputOtchestvo.current.value.length > 2 &&
                parseInt(this.inputBalance.current.value) < 10000 &&
                parseInt(this.inputBalance.current.value) > -1000
            )
    }

    render() {
        if (!this.state.editMode) {
            console.log("MobileClient id="+this.state.id+" render");
            return (
                <tr>
                    <td>{this.state.lastName}</td>
                    <td>{this.state.firstName}</td>
                    <td>{this.state.otchestvo}</td>
                    <td>{this.state.balance}</td>
                    <td className={this.getStatusClassName()}>{this.getStatus()}</td>
                    <td><input type="button" value="Редактировать" onClick={this.editRecord} /></td>
                    <td><input type="button" value="Удалить" onClick={this.deleteRecord} /></td>
                </tr>
            );
        }
        else {
            return (
                <tr>
                    <td><input type="text" defaultValue={this.state.lastName} ref={this.inputLastName}
                               required minLength="2" maxLength="20"/></td>
                    <td><input type="text" defaultValue={this.state.firstName} ref={this.inputFirstName}
                               required minLength="2" maxLength="20"/></td>
                    <td><input type="text" defaultValue={this.state.otchestvo} ref={this.inputOtchestvo}
                               required minLength="2" maxLength="20"/></td>
                    <td><input type="number" className="Balance" defaultValue={this.state.balance} ref={this.inputBalance}
                               required min="-1000" max="10000"/></td>
                    <td className={this.getStatusClassName()}>{this.getStatus()}</td>
                    <td><input type="button" value="Сохранить" onClick={this.saveRecord}/></td>
                    <td><input type="button" value="Удалить" onClick={this.deleteRecord} /></td>
                </tr>
            )
        }
    }

}

export default MobileClient;