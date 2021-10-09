import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
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
        data: response.data
      })
    }).catch(ex => {
      console.log(ex);
    });
  }

  
  handleChange(event) {
    event.preventDefault();
    let state = this.state;
    let name = event.target.name;
    let value = event.target.value;
    state[name] = value;
    this.setState(state);
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
          {
            Header: "Code",
            accessor: "code"
          },
          {
            Header: "Teacher",
            accessor: "teacher"
          },
          {
            Header: "Start Date",
            accessor: "startDate"
          },
          {
            Header: "End Date",
            accessor: "endDate"
          },
        ]
      }
    ];

    return (
      <div className="Courses-List">

        <div className="content container-fluid text-start">
          <div className="row">
            <div className="col">
              <Textbox label="Name" type="text" placeholder="Name" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
            </div>
            <div className="col">
              <Textbox label="Code" type="text" placeholder="Code" name="code" value={this.state.code} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Teacher" type="text" placeholder="Teacher Name" name="teacher" value={this.state.teacher} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Start Date" type="text" placeholder="Start Date" name="startDate" value={this.state.startDate} onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Textbox label="End Date" type="text" placeholder="Start Date" name="endDate" value={this.state.endDate} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
            </div>
            <div className="col">
            </div>
            <div className="col">
            </div>
          </div>

          <div className="row text-end">
            <div className="col">
              <Button label="Search" onClick={this.save} />
            </div>
          </div>
        </div>




        <div className="content container-fluid text-center">
          <Table columns={columns} data={this.state.data} />
        </div>

      </div>
    )
  }
}

export default CoursesList;