import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderBanner from "./components/headerBanner/headerBanner";
import VisitorPage from "./pages/visitorPage/visitorPage";
import EmployeeLogin from "./pages/employeeLoginPage/employeeLogin";
import EmployeeDetails from "./pages/employeeDetailsPage/employeeDetails";
import StartButton from "./components/startButton/startButton";

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderBanner/>

            <Switch>
              <Route exact path="/visitor" component={VisitorPage}/>
              <Route exact path="/login" component={EmployeeLogin}/>
              <Route exact path="/details" component={EmployeeDetails}/>

            <section>
              <div className="welcome-text">
              <h1>Welcome to the Hackney Council HR System.</h1>
              <p>If you are a visitor with a pre-booked appointment, please register your visit by clicking the button below. Once you have registered your visit, the person who you booked a visit with will soon come and collect you.</p>
              <p>If you are an employee of Hackney Council, please login using the button below.</p>
              </div>
              
              <div className="button-container"> 
              <Link to="/visitor">
                <StartButton text="Register your visit" />
              </Link>
              <Link to="/login">
                <StartButton text="Employee login"/>
              </Link>
              </div>
            </section>
            </Switch>

          <footer>
            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except where otherwise stated</p>
          </footer>

      </div>
    </Router>
  );
}

export default App;
