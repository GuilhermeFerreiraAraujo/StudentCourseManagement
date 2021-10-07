import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import './StudentsList.scss';

class StudentsList extends React.Component {

  render() {
    const columns = [
      {
        Header: "Students",
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

export default StudentsList;