import React from 'react';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import { Redirect, withRouter } from "react-router-dom";
import './CoursesDetail.scss';

class CoursesDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      code: "",
      teacher: "",
      startDate: new Date(),
      endDate: new Date()
    };

    this.deleteCourse = this.deleteCourse.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  deleteCourse() {
    //Services.Post(Endpoints.StudentsApis.deleteStudent)
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    if (id) {
      const params = {
        "id": id
      };
      Services.Get(Endpoints.CoursesApis.GetCourses, params).then(response => {
        const course = response.data[0];
        this.setState(course)
      }).catch(ex => {
        console.log(ex);
      });
    }
  }

  save() {
    const data = {
      "id": this.state.id,
      "name": this.state.name,
      "code": this.state.code,
      "teacher": this.state.teacher,
      "startDate": this.state.startDate,
      "endDate": this.state.endDate
    }

    Services.Post(Endpoints.CoursesApis.UpsertCourses, data).then(response => {
      alert("success");
      <Redirect to="/courses-list" />
    }).catch(ex => {
      alert("Error");
      console.log(ex);
    })
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
    return (
      <div className="Courses-Detail">
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
              <Button type="danger" disabled={this.state.id <= 0} label="Delete" />
              <Button label="Save" onClick={this.save} />
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default withRouter(CoursesDetail);