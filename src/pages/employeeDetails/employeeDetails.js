import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";import AllEmployees from '../allEmployees/allEmployees';
import "./employeeDetails.css";
let users = require("../../MOCK_DATA.json")

export default function EmployeeDetails() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/all-employees" component={AllEmployees}/>
            <section>
                <div className="welcome-text">
                    <h1>Employee Details</h1>
                    <Link to="/all-employees">
                        <p>See All Employees</p>
                    </Link>
                    <p>Name: {users[0].first_name} {users[0].last_name}</p>  
                    <p>Job title: {users[0].job_title}</p>
                    <p>Email: {users[0].contact_email}</p> 
                    <p>Salary: {users[0].salary}</p> 
                    <p>Office: {users[0].office_location}</p>
                    <p>Contact information: <br/>{users[0].street_address}
                        <br/>{users[0].postcode}</p>
                    <p>Next of Kin: {users[0].next_of_kin_first_name} {users[0].next_of_kin_last_name}</p>
                </div>
            </section>
            </Switch>
            </Router>
        </div>
    )
}