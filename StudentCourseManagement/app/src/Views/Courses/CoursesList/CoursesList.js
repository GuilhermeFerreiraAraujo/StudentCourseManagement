import React from 'react';
import './CoursesList.scss';

class CoursesList extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default CoursesList;