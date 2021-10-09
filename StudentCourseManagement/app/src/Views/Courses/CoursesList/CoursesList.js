import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Datepicker from '../../../Components/Atoms/Datepicker/Datepicker';
import Button from '../../../Components/Atoms/Button/Button';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './CoursesList.scss';

class CoursesList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filters: {
        "id": "",
        "name": "",
        "code": "",
        "gender": "",
        "teacher": "",
        "startDateFrom": "",
        "startDateTo": "",
        "endDateFrom": "",
        "endDateTo": ""
      }
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  search() {

    const params = {};

    if (this.state.filters.id !== "") {
      params.id = this.state.filters.id
    };

    if (this.state.filters.name !== "") {
      params.name = this.state.filters.name
    };

    if (this.state.filters.code !== "") {
      params.code = this.state.filters.code
    };

    if (this.state.filters.teacher !== "") {
      params.teacher = this.state.filters.teacher
    };

    if (this.state.filters.startDateFrom !== "") {
      params.startDateFrom = this.state.filters.startDateFrom
    };

    if (this.state.filters.startDateTo !== "") {
      params.startDateTo = this.state.filters.startDateTo
    };

    if (this.state.filters.endDateFrom !== "") {
      params.endDateFrom = this.state.filters.endDateFrom
    };

    if (this.state.filters.endDateTo !== "") {
      params.endDateTo = this.state.filters.endDateTo
    };

    Services.Get(Endpoints.CoursesApis.GetCourses, params).then(response => {
      this.setState({
        data: response.data
      })
    }).catch(ex => {
      console.log(ex);
    });
  }

  handleChange(event) {
    event.preventDefault();
    let state = this.state.filters;
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
              <Textbox label="Id" type="text" placeholder="Id" name="id" onChange={this.handleChange.bind(this)} value={this.state.filters.id} />
            </div>
            <div className="col">
              <Textbox label="Name" type="text" placeholder="Name" name="name" onChange={this.handleChange.bind(this)} value={this.state.filters.name} />
            </div>
            <div className="col">
              <Textbox label="Code" type="text" placeholder="Code" name="code" value={this.state.filters.code} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Teacher" type="text" placeholder="Teacher Name" name="teacher" value={this.state.filters.teacher} onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Datepicker label="Start Date From" type="text" placeholder="Start Date From" name="startDateFrom" value={this.state.filters.startDateFrom} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Datepicker label="Start Date To" type="text" placeholder="Start Date To" name="startDateTo" value={this.state.filters.startDateTo} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Datepicker label="End Date From" type="text" placeholder="End Date From" name="endDateFrom" value={this.state.endDateFrom} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Datepicker label="End Date To" type="text" placeholder="End Date To" name="endDateTo" value={this.state.endDateTo} onChange={this.handleChange.bind(this)} />
            </div>
          </div>

          <div className="row text-end">
            <div className="col">
              <Button label="Search" onClick={this.search} />
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