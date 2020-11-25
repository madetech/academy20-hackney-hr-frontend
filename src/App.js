import React,{ useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderBanner from "./components/headerBanner/headerBanner";
import VisitorPage from "./pages/visitorPage/visitorPage";
import EmployeeLogin from "./pages/employeeLoginPage/employeeLogin";
import Details from "./components/details/details";
import AllEmployees from "./pages/allEmployeesPage/allEmployees";
import DetailsPage from "./pages/detailsPage/detailsPage";
// import EditDetails from "./components/editDetails/editDetails";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderBanner/>
            {/* <p>{employee}</p> */}
            <Switch>
              <Route exact path="/login" component={EmployeeLogin}/>
              <Route exact path="/visitor" component={VisitorPage}/>
              <Route exact path="/details" component={DetailsPage}/>
              <Route exact path="/employees" component={DetailsPage}/>
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
