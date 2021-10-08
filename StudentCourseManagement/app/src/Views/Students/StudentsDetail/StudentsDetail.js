import React from 'react';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
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
  }

  render() {
    return (
      <div className="container-fluid text-start">
        <div className="row">
          <div className="col">
            <Textbox label="First Name" type="text" placeholder="First Name" />
          </div>
          <div className="col">
            <Textbox label="Surname" type="text" placeholder="Surname" />
          </div>
          <div className="col">
            <Textbox label="Gender" type="text" placeholder="Gender" />
          </div>
          <div className="col">
            <Textbox label="Date of Birth" type="text" placeholder="Date of Birth" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Textbox label="Address 1" type="text" placeholder="Address 1" />
          </div>
          <div className="col">
            <Textbox label="Address 2" type="text" placeholder="Address 2" />
          </div>
          <div className="col">
            <Textbox label="Address 3" type="text" placeholder="Address 3" />
          </div>
          <div className="col">
          </div>
        </div>

        <div className="row text-end">
        <div className="col">
            <Button type="danger" label="Delete"/>
            <Button label="Save" />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsDetail;