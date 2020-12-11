import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import './MobileCompany.css';
import {myEvents} from './events';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        headers: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                header: PropTypes.string.isRequired,
            })
        ),
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                lastName: PropTypes.string.isRequired,
                firstName: PropTypes.string.isRequired,
                otchestvo: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired,
            })
        ),
    };

    state = {
        name: this.props.name,
        clients: this.props.clients,
        showState: 0 // show all
    };

    setName1 = () => {
        this.setState({name:'МТС'});
    };

    setName2 = () => {
        this.setState({name:'Velcom'});
    };

    showAll = () => {
        this.setState({showState: 0} ); // show all
    };

    showActive = () => {
        this.setState({showState: 1} ); // show active
    };

    showBlocked = () => {
        this.setState({showState: 2} ); // show blocked
    };

    addNewClient = () => {
        myEvents.emit('AddingRecord', this.getNewProductID());
    };

    addRecord = (newId) => {
        var newRecord = {id: newId, lastName: "", firstName: "", otchestvo: "", balance: 0, status: false};
        let newClients = [...this.state.clients]; // копия самого массива клиентов
        newClients.push(newRecord);
        this.setState({clients: newClients});
    }

    getNewProductID = () => {
        return (
            this.state.clients.reduce( (r,v,i,a) => {
                if (v.id > r) return v.id;
                else return r;
            }, 0) +1
        )
    };

    deleteRecord = (id) => {
        let self = this;
        self.setState({
            clients: self.state.clients.filter((v) => {
                return v.id !== id;
            })
        });
    };

    componentDidMount = () => {
        myEvents.addListener('DeleteRecordButtonClicked', this.deleteRecord);
        myEvents.addListener('AddingRecord', this.addRecord);
    };

    componentWillUnmount = () => {
        myEvents.removeListener('DeleteRecordButtonClicked', this.deleteRecord);
        myEvents.removeListener('AddingRecord', this.addRecord);
    };

    render() {

        console.log("MobileCompany render");

        let headerLine = this.props.headers.map((element) => <th key={element.code}>{element.header}</th>);/* формирование заголовков таблицы */

        let clientsCode = this.state.clients.map( client => {
                if (this.state.showState === 0) return <MobileClient key={client.id} info={client} />
                else if (this.state.showState === 1 && client.status)
                    return <MobileClient key={client.id} info={client} />
                else if (this.state.showState === 2 && !client.status)
                    return <MobileClient key={client.id} info={client} />
            }
        );

        return (
            <div className='MobileCompany'>
                <input type="button" value="МТС" onClick={this.setName1} />
                <input type="button" value="Velcom" onClick={this.setName2} />
                <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
                <hr/>
                <input type="button" value="Все" onClick={this.showAll} />
                <input type="button" value="Активные" onClick={this.showActive} />
                <input type="button" value="Заблокированные" onClick={this.showBlocked} />
                <hr/>
                <table className="MobileCompanyClients">
                    <thead><tr>{headerLine}</tr></thead>
                    <tbody>{clientsCode}</tbody>
                </table>
                <input type="button" value="Добавить клиента" onClick={this.addNewClient} />
            </div>
        );
    }
}

export default MobileCompany;