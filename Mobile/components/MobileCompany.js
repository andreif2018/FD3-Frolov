import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

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

    setBalance = (clientId,newBalance) => {
      let changed=false;
      let newClients=[...this.state.clients]; // копия самого массива клиентов
      newClients.forEach( (c,i) => {
        if ( c.id===clientId && c.balance!==newBalance ) {
          let newClient={...c}; // копия хэша изменившегося клиента
          newClient.balance=newBalance;
          newClients[i]=newClient;
          changed=true;
        }
      } );
      if ( changed )
        this.setState({clients:newClients});
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

    addClient = () => {

    };

    render() {

        console.log("MobileCompany render");

        var headerLine = this.props.headers.map((element) => <th key={element.code}>{element.header}</th>);/* формирование заголовков таблицы */

        var clientsCode=this.state.clients.map( client =>
            <MobileClient key={client.id} info={client} show={this.state.showState} />
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
                <input type="button" value="Добавить клиента" onClick={this.addClient} />
            </div>
        )
            ;

    }

}

export default MobileCompany;