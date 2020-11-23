import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "../../components/details/details";
import "../detailsPage/detailsPage.css";
import AllEmployees from "../../pages/allEmployeesPage/allEmployees";
import StartButton from "../../components/startButton/startButton";

export default function DetailsPage() {
    const [details, setDetails] = useState(true);
    const [employees, setEmployees] = useState(false);

    const toggleDisplay = () => {
        setDetails(!details)
        setEmployees(!employees)
    };

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
              <div id="details"><a href="#" onClick={!details ? toggleDisplay : null}>My Details</a></div>
              <div id="employees"><a href="#" onClick={!employees ? toggleDisplay : null}>Employees</a></div>
              <div id="visitors">Visitors</div>
            </div>  
          </div>
          <div>
            {details ? <Details/> : employees ? <AllEmployees /> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
