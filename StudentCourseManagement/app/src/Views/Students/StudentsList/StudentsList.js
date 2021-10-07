import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './StudentsList.scss';

class StudentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: []
    };
  }

  componentDidMount() {
    Services.Get(Endpoints.StudentsApis.GetStudents).then(response => {
      this.setState({
        data: response.data.Students
      })
    }).catch(ex => {
      console.log(ex);
    });
  }

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