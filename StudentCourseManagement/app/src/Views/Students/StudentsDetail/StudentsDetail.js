import React from 'react';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import { Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './StudentsDetail.scss';

class StudentsDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      firstName: "",
      surname: "",
      gender: "",
      dateOfBirth: null,
      address1: "",
      address2: "",
      address3: ""
    };

    this.deleteStudent = this.deleteStudent.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteStudent() {
    //Services.Post(Endpoints.StudentsApis.deleteStudent)
  }

  saveStudent() {
    const data = {
      "id": this.state.id,
      "firstName": this.state.firstName,
      "surname": this.state.surname,
      "gender": this.state.gender,
      "dateOfBirth": this.state.dateOfBirth,
      "address1": this.state.address1,
      "address2": this.state.address2,
      "address3": this.state.address3
    }

    Services.Post(Endpoints.StudentsApis.UpsertStudents, data).then(response => {
      alert("success");
      <Redirect to="/" />
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
      <div className="container-fluid text-start">
        <div className="row">
          <div className="col">
            <Textbox label="First Name" type="text" placeholder="First Name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName} />
          </div>
          <div className="col">
            <Textbox label="Surname" type="text" placeholder="Surname" name="surname" value={this.state.surname} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="col">
            <Textbox label="Gender" type="text" placeholder="Gender" name="gender" value={this.state.gender} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="col">
            <Textbox label="Date of Birth" type="text" placeholder="Date of Birth" name="dateOfBirth" value={this.state.dateOfBirth} onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Textbox label="Address 1" type="text" placeholder="Address 1" name="address1" value={this.state.address1} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="col">
            <Textbox label="Address 2" type="text" placeholder="Address 2" name="address2" value={this.state.address2} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="col">
            <Textbox label="Address 3" type="text" placeholder="Address 3" name="address3" value={this.state.address3} onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="col">
          </div>
        </div>

        <div className="row text-end">
          <div className="col">
            <Button type="danger" label="Delete" />
            <Button label="Save" onClick={this.saveStudent} />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsDetail;