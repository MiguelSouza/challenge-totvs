import './App.css';
import React, { useEffect, useState } from 'react';
import api from './services/api';
import 'antd/dist/antd.min.css'
import { Table, Input } from 'antd';
import moment from 'moment';

const { Search } = Input;

const columns = [
  {
    title: 'Nome do cliente',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
      multiple: 1,
    },
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    sorter: {
      compare: (a, b) => a.value - b.value,
      multiple: 2,
    },
    render: (text) => {
      var tmp = parseInt(text) + '';
      tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
      if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

      return tmp;
    }
  },
  {
    title: 'Desde',
    dataIndex: 'since',
    key: 'since',
    sorter: {
      compare: (a, b) => moment(a.since).unix() - moment(b.since).unix(),
      multiple: 3,
    },
    render: (text) => moment(text).format('DD/MM/YYYY')
  }
];

export default function App () {
  const [clients, setClients] = useState();
  const [clientsDefaulter, setClientsDefaulter] = useState();

  useEffect(() => {
    getClientsDefaulters();
  }, []);

  const onSearch = value => {
    if (value) {
      setClients(clientsDefaulter.filter(item => item.name.toUpperCase().indexOf(value.toUpperCase()) !== -1));
    } else {
      setClients(clientsDefaulter);
    }
  }

  const getClientsDefaulters = () => {
    api
      .get("/clientsdefaulter")
      .then((response) => {
        setClients(response.data);
        setClientsDefaulter(response.data);
      })
      .catch(() => {
        alert("Ouve um erro, tente novamente mais tarde!");
      });
  };

  return (
    <div>
      <h1 style={{ marginTop: 10, marginLeft: 10 }}>Clientes Inadimplentes</h1><br></br>
      <Search style={{ width: 304, marginLeft: 10, marginBottom: 20, marginTop: 10 }}
        placeholder="Buscar Cliente" onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={clients} />
    </div>
  );

}