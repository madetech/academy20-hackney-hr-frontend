import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../../components/details/details";
import "../detailsPage/detailsPage.css";
import AllEmployees from "../../pages/allEmployeesPage/allEmployees";
import StartButton from "../../components/startButton/startButton";

export default function DetailsPage() {
  return (
    <div>
      <section>
        <Router forceRefresh={true}>
          <Link to="/">
            <StartButton text="Back to home" />
          </Link>
        </Router>
        <div>
          <div className="nav-bar">
            <div>
              <div id="details">My Details</div>
              <div id="employees">Employees</div>
              <div id="visitors">Visitors</div>
            </div>
          </div>
          <div>
            <Details />
            {/* <AllEmployees /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
