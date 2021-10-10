import StudentsList from './Views/Students/StudentsList/StudentsList';
import CoursesList from './Views/Courses/CoursesList/CoursesList';
import SubscriptionsList from './Views/Subscriptions/SubscriptionsList/SubscriptionsList';
import StudentsDetail from './Views/Students/StudentsDetail/StudentsDetail';
import CoursesDetail from './Views/Courses/CoursesDetail/CoursesDetail';
import SubscriptionsDetail from './Views/Subscriptions/SubscriptionsDetail/SubscriptionsDetail';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item bg-light dropdown">
                  <Link className="nav-link" to="/" data-bs-toggle="dropdown">Students</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/student-detail">Add Student</Link></li>
                    <li><Link className="dropdown-item" to="/">View Students</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/courses-list" data-bs-toggle="dropdown">Courses</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="course-detail">Add Course</Link></li>
                    <li><Link className="dropdown-item" to="courses-list">View Courses</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/subscriptions-list" data-bs-toggle="dropdown">Subscriptions</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/subscription-detail">Add Subscription</Link></li>
                    <li><Link className="dropdown-item" to="/subscriptions-list">View Subscriptions</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <StudentsList />
          </Route>
          <Route exact path="/student-detail/:id">
            <StudentsDetail />
          </Route>
          <Route exact path="/student-detail">
            <StudentsDetail />
          </Route>
          <Route exact path="/courses-list">
            <CoursesList />
          </Route>
          <Route exact path="/course-detail/:id">
            <CoursesDetail />
          </Route>
          <Route exact path="/course-detail">
            <CoursesDetail />
          </Route>
          <Route exact path="/subscriptions-list">
            <SubscriptionsList />
          </Route>
          <Route exact path="/subscription-detail">
            <SubscriptionsDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
