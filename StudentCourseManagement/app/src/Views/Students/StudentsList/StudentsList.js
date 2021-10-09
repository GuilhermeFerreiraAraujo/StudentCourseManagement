import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Select from '../../../Components/Atoms/Select/Select';
import Datepicker from '../../../Components/Atoms/Datepicker/Datepicker';
import Button from '../../../Components/Atoms/Button/Button';
import { withRouter } from "react-router-dom";
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './StudentsList.scss';

class StudentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filters: {
        "id": "",
        "firstName": "",
        "surname": "",
        "gender": "",
        "dateOfBirth": "",
        "address1": "",
        "address2": "",
        "address3": ""
      }
    };

    this.search = this.search.bind(this);
    this.handleTableDoubleClick = this.handleTableDoubleClick.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  handleTableDoubleClick(id){
    this.props.history.push(`/student-detail/${id}`)
  }

  search() {
    const params = {};

    if (this.state.filters.id !== ""){
      params.id = this.state.filters.id
    };

    if (this.state.filters.firstName !== ""){
      params.firstName = this.state.filters.firstName
    };

    if (this.state.filters.surname !== ""){
      params.surname = this.state.filters.surname
    };

    if (this.state.filters.gender !== ""){
      params.gender = this.state.filters.gender
    };

    if (this.state.filters.address1 !== ""){
      params.address1 = this.state.filters.address1
    };

    if (this.state.filters.address2 !== ""){
      params.address2 = this.state.filters.address2
    };

    if (this.state.filters.address3 !== ""){
      params.address3 = this.state.filters.address3
    };

    if (this.state.filters.dateOfBirth !== ""){
      params.dateOfBirth = this.state.filters.dateOfBirth
    };

    Services.Get(Endpoints.StudentsApis.GetStudents, params).then(response => {
      this.setState({
        data: response.data.students
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
    const gender = ["", "Male", "Female"];

    return (
      <div className="Students-List">

        <div className="content container-fluid text-start">

          <div className="row">
            <div className="col">
              <Textbox label="Id" type="text" placeholder="Id" name="id" onChange={this.handleChange.bind(this)} value={this.state.filters.id} />
            </div>
            <div className="col">
              <Textbox label="First Name" type="text" placeholder="First Name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.filters.firstName} />
            </div>
            <div className="col">
              <Textbox label="Surname" type="text" placeholder="Surname" name="surname" value={this.state.filters.surname} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Select label="Gender" placeholder="Gender" name="gender" data={gender} />
            </div>

          </div>
          <div className="row">
            <div className="col">
              <Datepicker label="Date of Birth" type="text" placeholder="Date of Birth" name="dateOfBirth" value={this.state.filters.dateOfBirth} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Address 1" type="text" placeholder="Address 1" name="address1" value={this.state.filters.address1} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Address 2" type="text" placeholder="Address 2" name="address2" value={this.state.filters.address2} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Address 3" type="text" placeholder="Address 3" name="address3" value={this.state.filters.address3} onChange={this.handleChange.bind(this)} />
            </div>
          </div>

          <div className="row text-end">
            <div className="col">
              <Button label="Search" onClick={this.search} />
            </div>
          </div>

        </div>

        <div className="content container-fluid text-center">
          <Table columns={columns} data={this.state.data} onDoubleClick={this.handleTableDoubleClick} />
        </div>


      </div>
    )
  }
}

export default withRouter(StudentsList);