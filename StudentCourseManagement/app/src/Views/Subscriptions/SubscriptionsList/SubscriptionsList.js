import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import './SubscriptionsList.scss';

class SubscriptionsList extends React.Component {
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