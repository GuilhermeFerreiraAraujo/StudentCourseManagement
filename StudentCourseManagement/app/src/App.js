import StudentsList from './Views/Students/StudentsList/StudentsList';
import CoursesList from './Views/Courses/CoursesList/CoursesList';
import SubscriptionsList from './Views/Subscriptions/SubscriptionsList/SubscriptionsList';
import StudentsDetail from './Views/Students/StudentsList/StudentsList';
import CoursesDetail from './Views/Courses/CoursesList/CoursesList';
import SubscriptionsDetail from './Views/Subscriptions/SubscriptionsList/SubscriptionsList';
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
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav">
                <li class="nav-item bg-light dropdown">
                  <Link class="nav-link" to="/" data-bs-toggle="dropdown">Students</Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/student-detail">Add Student</Link></li>
                    <li><Link class="dropdown-item" to="/">View Students</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link" to="/courses-list" data-bs-toggle="dropdown">Courses</Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="course-detail">Add Course</Link></li>
                    <li><Link class="dropdown-item" to="courses-list">View Courses</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link" to="/subscriptions-list" data-bs-toggle="dropdown">Subscriptions</Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/subscription-detail">Add Subscription</Link></li>
                    <li><Link class="dropdown-item" to="/subscriptions-list">View Subscriptions</Link></li>
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
          <Route exact path="/student-detail">
            <StudentsDetail />
          </Route>
          <Route exact path="/courses-list">
            <CoursesList />
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
