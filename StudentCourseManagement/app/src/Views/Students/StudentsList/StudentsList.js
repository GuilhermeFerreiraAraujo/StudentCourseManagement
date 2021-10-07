import React from 'react';
import './StudentsList.scss';

class StudentsList extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default StudentsList;