import React from 'react';
import { withRouter} from "react-router-dom";
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './SubscriptionsDetail.scss';

class SubscriptionsDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      idStudent: "",
      idCourse: "",
      errors: {
        idStudent: "",
        idCourse: "",
      }
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    if (id) {
      const params = {
        "id": id
      };
      Services.Get(Endpoints.SubscriptionsApis.GetSubscription, params).then(response => {
        const subscription = response.data.subscription[0];
        this.setState(subscription)
      }).catch(ex => {
        console.log(ex);
      });
    }
  }

  handleValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //Id Course
    if (!fields["idCourse"]) {
      formIsValid = false;
      errors["idCourse"] = "Cannot be empty";
    } else if (typeof fields["idCourse"] !== "undefined") {
      if (!fields["idCourse"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["idCourse"] = "Only numbers";
      }
    }

    //Id Student
    if (!fields["idStudent"]) {
      formIsValid = false;
      errors["idStudent"] = "Cannot be empty";
    } else if (typeof fields["idStudent"] !== "undefined") {
      if (!fields["idStudent"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["idStudent"] = "Only numbers";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  save(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      const data = {
        "idStudent": this.state.idStudent,
        "idCourse": this.state.idCourse
      }

      Services.Post(Endpoints.SubscriptionsApis.UpsertSubscriptions, data).then(response => {
        alert("success");
      }).catch(ex => {
        alert("Error");
        console.log(ex);
      })
    }
  }

  handleDelete() {
    if (this.state.id > 0) {
      const data = {
        "id": this.state.id,
      }

      Services.Post(Endpoints.SubscriptionsApis.DeleteSubscription, data).then(response => {
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

    return (
      <div className="Student-Detail">
        <div className="content container-fluid text-start">
          <div className="row">
            <div className="col">
              <Textbox label="Id Student" type="text" placeholder="Id Student" name="idStudent" onChange={this.handleChange.bind(this)} value={this.state.idStudent} error={this.state.errors.idStudent} />
            </div>
            <div className="col">
              <Textbox label="Id Course" type="text" placeholder="Id Course" name="idCourse" value={this.state.idCourse} error={this.state.errors.idCourse} onChange={this.handleChange.bind(this)} />
            </div>
          </div>

          <div className="row text-end">
            <div className="col">
              <Button type="danger" disabled={this.state.id <= 0} label="Delete" onClick={this.handleDelete} />
              <Button label="Save" onClick={this.save} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SubscriptionsDetail);