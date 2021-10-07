import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './CoursesList.scss';

class CoursesList extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Services.Get(Endpoints.CoursesApis.GetCourses).then(response => {
      this.setState({
        data: response.data.Courses
      })
    }).catch(ex => {
      console.log(ex);
    });
  }

  render() {
    const columns = [
      {
        Header: "Courses",
        columns: [
          {
            Header: "Name",
            accessor: "name"
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

export default CoursesList;