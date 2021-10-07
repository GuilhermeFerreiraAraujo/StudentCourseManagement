import React from 'react';
import './StudentsDetail.scss';

class StudentsDetail extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default StudentsDetail;