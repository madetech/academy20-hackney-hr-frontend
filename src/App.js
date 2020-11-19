import React,{ useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderBanner from "./components/headerBanner/headerBanner";
import VisitorPage from "./pages/visitorPage/visitorPage";
import EmployeeLogin from "./pages/employeeLoginPage/employeeLogin";
// import EmployeeDetails from "./pages/employeeDetailsPage/employeeDetails";
import Home from "./pages/home/home";

function App() {
  const [employee, setEmployee] = useState("");

  useEffect(() => {
    axios.get('https://hackney-hr-backend.herokuapp.com/api/employee')
    .then(res => {
      setEmployee(res.data[0].first_name);
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <Router>
      <div className="container">
        <HeaderBanner/>
            <p>{employee}</p>
            <Switch>
              <Route exact path="/login" component={EmployeeLogin}/>
              <Route exact path="/visitor" component={VisitorPage}/>
              {/* <Route exact path="/details" component={EmployeeDetails}/> */}
          
              <Home/>

            </Switch>
          <footer>
            <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</a>, except where otherwise stated</p>
          </footer>
      </div>
    </Router>
  );
}

export default App;
