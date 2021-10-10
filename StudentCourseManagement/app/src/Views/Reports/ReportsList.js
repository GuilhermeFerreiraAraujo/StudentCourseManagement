import React from 'react';
import Table from '../../../Components/Components/Table/Table';
import Textbox from '../../../Components/Atoms/Textbox/Textbox';
import Button from '../../../Components/Atoms/Button/Button';
import { withRouter } from "react-router-dom";
import * as Services from '../../../Services/Services';
import * as Endpoints from '../../../Constants/Endpoints';
import './StudentsList.scss';

class ReportsList extends React.Component {
    constructor() {
        super();
        this.state = {
            students: [],
            courses: [],
            filters: {
                "idStudent": "",
                "idCourse": ""
            }
        };

        this.search = this.search.bind(this);
        this.handleTableDoubleClick = this.handleTableDoubleClick.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    searchCoursesByStudentId() {
        const params = {};

        if (this.state.filters.idStudent !== "") {
            params.idStudent = this.state.filters.idStudent;
        };

        Services.Get(Endpoints.StudentsApis.GetCoursesByStudentId, params).then(response => {
            this.setState({
                courses: response.data.students
            })
        }).catch(ex => {
            console.log(ex);
        });
    }

    searchStudentsByCourseId() {
        const params = {};

        if (this.state.filters.idCourse !== "") {
            params.idCourse = this.state.filters.idCourse
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

        return (
            <div className="Students-List">
                <div className="content container-fluid text-start">
                    <div className="row">
                        <div className="col">
                            <Textbox label="Id Course" type="text" placeholder="Id Course" name="idCourse" onChange={this.handleChange.bind(this)} value={this.state.filters.idCourse} />
                        </div>
                        <div className="col">
                            <Button label="Search" onClick={this.searchStudentsByCourseId} />
                        </div>
                    </div>

                    <div className="content container-fluid text-center">
                        <Table columns={studentsColumns} data={this.state.students} />
                    </div>

                    <div className="row">
                        <div className="col">
                            <Textbox label="Id Student" type="text" placeholder="Id Student" name="idStudent" onChange={this.handleChange.bind(this)} value={this.state.filters.idStudent} />
                        </div>
                        <div className="col">
                            <Button label="Search" onClick={this.searchCoursesByStudentId} />
                        </div>
                    </div>
                </div>

                <div className="content container-fluid text-center">
                    <Table columns={coursesColumns} data={this.state.courses} />
                </div>

            </div >
        )
    }
}

export default withRouter(ReportsList);