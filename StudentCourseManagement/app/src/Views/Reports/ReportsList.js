import React from 'react';
import Table from '../../Components/Components/Table/Table';
import Textbox from '../../Components/Atoms/Textbox/Textbox';
import Button from '../../Components/Atoms/Button/Button';
import { withRouter } from "react-router-dom";
import * as Services from '../../Services/Services';
import * as Endpoints from '../../Constants/Endpoints';
import './ReportsList.scss';

class ReportsList extends React.Component {
    constructor() {
        super();
        this.state = {
            coursesWithoutFullCapacity: 0,
            studentsWithoutAllSubscriptions: 0,
            students: [],
            courses: [],
            filters: {
                "idStudent": "",
                "idCourse": ""
            }
        };

        this.searchStudentsByCourseId = this.searchStudentsByCourseId.bind(this);
        this.searchCoursesByStudentId = this.searchCoursesByStudentId.bind(this);
    }

    componentDidMount() {
        Services.Get(Endpoints.SubscriptionsApis.GetSubscriptionsStatistics).then(response => {
            this.setState({
                coursesWithoutFullCapacity: response.data.coursesWithoutFullCapacity,
                studentsWithoutAllSubscriptions: response.data.studentsWithoutAllSubscriptions
            })
        }).catch(ex => {
            console.log(ex);
        });
    }

    searchCoursesByStudentId() {
        const params = {};

        if (this.state.filters.idStudent !== "") {
            params.id = this.state.filters.idStudent;
        };

        Services.Get(Endpoints.CoursesApis.GetCoursesByStudentId, params).then(response => {
            this.setState({
                courses: response.data.courses
            })
        }).catch(ex => {
            console.log(ex);
        });
    }

    searchStudentsByCourseId() {
        const params = {};

        if (this.state.filters.idCourse !== "") {
            params.id = this.state.filters.idCourse
        };

        Services.Get(Endpoints.StudentsApis.GetStudentsByCourseId, params).then(response => {
            this.setState({
                students: response.data.students
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
        const coursesColumns = [
            {
                Header: "Courses",
                columns: [
                    {
                        Header: "Id",
                        accessor: "id"
                    },
                    {
                        Header: "Name",
                        accessor: "name"
                    },
                    {
                        Header: "Code",
                        accessor: "code"
                    },
                    {
                        Header: "Teacher",
                        accessor: "teacher"
                    },
                    {
                        Header: "Start Date",
                        accessor: "startDate"
                    },
                    {
                        Header: "End Date",
                        accessor: "endDate"
                    },
                ]
            }
        ];
        const studentsColumns = [
            {
                Header: "Students",
                columns: [
                    {
                        Header: "Id",
                        accessor: "id"
                    },
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

        if (this.state.students.length > 0) {
            var studentTable = (<div className="content container-fluid text-center">
                <Table columns={studentsColumns} data={this.state.students} />
            </div>)
        }

        if (this.state.courses.length > 0) {
            var courseTable = (<div className="content container-fluid text-center">
                <Table columns={coursesColumns} data={this.state.courses} />
            </div>);
        }

        return (
            <div className="Students-List">
                 <div className="content container-fluid text-center">
                    <div className="row">
                        <div className="col">
                            <h1>Courses with full capacity: {this.state.coursesWithoutFullCapacity} </h1>
                        </div>
                        <div className="col">
                            <h1>Students with all subscriptions: {this.state.studentsWithoutAllSubscriptions}</h1>
                        </div>
                    </div>
                </div>
                <div className="content container-fluid text-start">
                    <div className="row">
                        <div className="col">
                            <Textbox label="Id Course" type="text" placeholder="Id Course" name="idCourse" onChange={this.handleChange.bind(this)} value={this.state.filters.idCourse} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <Button label="Search Students" className="margin-top" onClick={this.searchStudentsByCourseId} />
                        </div>
                    </div>
                </div>

                {studentTable}

                <div className="content container-fluid text-start">
                    <div className="row">
                        <div className="col">
                            <Textbox label="Id Student" type="text" placeholder="Id Student" name="idStudent" onChange={this.handleChange.bind(this)} value={this.state.filters.idStudent} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-end">
                            <Button label="Search Courses" onClick={this.searchCoursesByStudentId} />
                        </div>
                    </div>
                </div>
                {courseTable}

            </div >
        )
    }
}

export default withRouter(ReportsList);