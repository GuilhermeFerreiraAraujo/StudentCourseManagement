
import React from 'react';
import './CoursesDetail.scss';

class CoursesDetail extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default CoursesDetail;