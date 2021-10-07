import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './SubscriptionsList.scss';

class SubscriptionsList extends React.Component {

  constructor() {
    super();
    this.state = {
      Data: []
    };
  }

  componentDidMount() {
    Services.Get(Endpoints.SubscriptionsApis.GetSubscriptions).then(response => {
      this.setState({
        data: response.data.Subscriptions
      })
    });
  }

  render() {
    const columns = [
      {
        Header: "Subscriptions",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
        ]
      }
    ];

    const data = [
      {
        "name": "Guilherme Ferreira de Araújo"
      }
    ];

    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    )
  }
}

export default SubscriptionsList;