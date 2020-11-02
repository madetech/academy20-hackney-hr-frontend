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
                    <p>Job title: {users[0]["Job Title"]}</p>
                    <p>Email: {users[0]["contact email"]}</p> 
                    <p>Salary: {users[0].Salary}</p> 
                    <p>Office: {users[0]["Office Location"]}</p>
                    <p>Contact information: <br/>{users[0]["Street Number"]}
                        <br/>{users[0]["Street Name"]}
                        <br/>{users[0]["Post Code"]}</p>
                    {/* <p>Next of Kin: {users[0]["Next of Kin"]}</p> */}
                    {/*we will need to add id as another param in employee*/}
                    {/* {users.map(employee => (
                        <p key={employee}>{employee.first_name}</p>
                    ))} */}
                </div>
            </section>
            </Switch>
            </Router>
        </div>
    )
}