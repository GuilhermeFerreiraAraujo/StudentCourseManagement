import './App.scss';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item bg-light dropdown">
                <a class="nav-link" href="#" data-bs-toggle="dropdown">Students</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Add Student</a></li>
                  <li><a class="dropdown-item" href="#">View Students</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" data-bs-toggle="dropdown">Courses</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Add Course</a></li>
                  <li><a class="dropdown-item" href="#">View Courses</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" data-bs-toggle="dropdown">Subscriptions</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Add Subscription</a></li>
                  <li><a class="dropdown-item" href="#">View Subscriptions</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div> 
      </nav>


      <header className="App-header">
        <h1>Hello, world!</h1>

      </header>
    </div>
  );
}

export default App;
