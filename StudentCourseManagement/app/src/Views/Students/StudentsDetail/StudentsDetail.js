import React from 'react';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
import Select from '../../../Components/Atoms/Select/Select';
import Datepicker from '../../../Components/Atoms/Datepicker/Datepicker';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import { withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './StudentsDetail.scss';

class StudentsDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      firstName: "",
      surname: "",
      gender: "Male",
      dateOfBirth: "",
      address1: "",
      address2: "",
      address3: "",
      errors: {
        firstName: "",
        surname: "",
        gender: "",
        dateOfBirth: "",
        address1: "",
        address2: "",
        address3: "",
      }
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    if (id) {
      const params = {
        "id": id
      };
      Services.Get(Endpoints.StudentsApis.GetStudents, params).then(response => {
        const student = response.data.students[0];
        this.setState(student)
      }).catch(ex => {
        console.log(ex);
      });
    }
  }

  handleValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //First name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    } else if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Only letters";
      }
    }

    //Surname
    if (!fields["surname"]) {
      formIsValid = false;
      errors["surname"] = "Cannot be empty";
    } else if (typeof fields["surname"] !== "undefined") {
      if (!fields["surname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["surname"] = "Only letters";
      }
    }

    //Address 1
    if (!fields["dateOfBirth"]) {
      formIsValid = false;
      errors["dateOfBirth"] = "Cannot be empty";
    }

    //Address 1
    if (!fields["address1"]) {
      formIsValid = false;
      errors["address1"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }



  saveStudent(e) {
    e.preventDefault();

    if (this.handleValidation()) {
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
        this.props.history.push("/courses-list")
      }).catch(ex => {
        alert("Error");
        console.log(ex);
      })
    }
  }

  handleDelete(){
      if (this.state.id > 0)
      {
        const data = {
          "id": this.state.id,
        }
  
        Services.Post(Endpoints.StudentsApis.DeleteStudent, data).then(response => {
          this.props.history.push("/")
        }).catch(ex => {
          alert("Error");
          console.log(ex);
        })
      }
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

    const gender = ["Male", "Female"];

    return (
      <div className="Student-Detail">
        <div className="content container-fluid text-start">
          <div className="row">
            <div className="col">
              <Textbox label="First Name" type="text" placeholder="First Name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName} error={this.state.errors.firstName} />
            </div>
            <div className="col">
              <Textbox label="Surname" type="text" placeholder="Surname" name="surname" value={this.state.surname} error={this.state.errors.surname} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Select label="Gender" name="gender" data={gender}  onChange={this.handleChange.bind(this)} value={this.state.gender} />
            </div>
            <div className="col">
              <Datepicker label="Date of Birth" type="text" placeholder="Date of Birth" name="dateOfBirth" value={this.state.dateOfBirth} error={this.state.errors.dateOfBirth} onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Textbox label="Address 1" type="text" placeholder="Address 1" name="address1" value={this.state.address1} error={this.state.errors.address1} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Address 2" type="text" placeholder="Address 2" name="address2" value={this.state.address2} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
              <Textbox label="Address 3" type="text" placeholder="Address 3" name="address3" value={this.state.address3} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="col">
            </div>
          </div>

          <div className="row text-end">
            <div className="col">
              <Button type="danger" disabled={this.state.id <= 0} label="Delete" onClick={this.handleDelete}/>
              <Button label="Save" onClick={this.saveStudent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StudentsDetail);