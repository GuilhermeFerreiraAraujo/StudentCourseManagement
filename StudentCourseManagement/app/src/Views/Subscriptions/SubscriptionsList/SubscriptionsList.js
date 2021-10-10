import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './SubscriptionsList.scss';

class SubscriptionsList extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Services.Get(Endpoints.SubscriptionsApis.GetSubscriptions).then(response => {
      this.setState({
        data: response.data.subscriptions
      })
    }).catch(ex => {
      console.log(ex);
    });
  }

  render() {
    const columns = [
      {
        Header: "Subscriptions",
        columns: [
          {
            Header: "Id",
            accessor: "id"
          },
          {
            Header: "Id Course",
            accessor: "idCourse"
          },
          {
            Header: "Course Name",
            accessor: "courseName"
          },
          {
            Header: "Course Code",
            accessor: "courseCode"
          },
          {
            Header: "Id Student",
            accessor: "idStudent"
          },
          {
            Header: "Student First Name",
            accessor: "studentFirstName"
          },
          {
            Header: "Student Surname",
            accessor: "studentSurname"
          },
        ]
      }
    ];

    return (

      <div className="Subscriptions-List">
        <div className="content container-fluid text-center">

          <Table columns={columns} data={this.state.data} />
        </div>
      </div>

    )
  }
}

export default SubscriptionsList;