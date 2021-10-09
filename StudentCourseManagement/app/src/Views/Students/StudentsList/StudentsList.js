import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './StudentsList.scss';

class StudentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Services.Get(Endpoints.StudentsApis.GetStudents).then(response => {
      this.setState({
        data: response.data.students
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
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Surname",
            accessor: "surname"
          },
          {
            Header: "Gender",
            accessor: "gender"
          },
          {
            Header: "Date of Birth",
            accessor: "dateOfBirth"
          },
          {
            Header: "Address 1",
            accessor: "address1"
          },
          {
            Header: "Address 2",
            accessor: "address2"
          },
          {
            Header: "Address 3",
            accessor: "address3"
          },
        ]
      }
    ];

    return (
      <div>
        <Table columns={columns} data={this.state.data} />
      </div>
    )
  }
}

export default StudentsList;