import React from 'react';
import "./employeeDetails.css";
// import getUsers from "../../getUsers";
let users = require("../../MOCK_DATA.json")

export default function EmployeeDetails() {
    return(
        <div>
                <div className="welcome-text">
                    <h1>Employee Details</h1>
                    <p>Name: {users[0].first_name} {users[0].last_name}</p>  
                    <p>Job title: {users[0]["Job Title"]}</p>  

                    {console.log(users[0])}
                    {/*we will need to add id as another param in employee*/}
                    {/* {users.map(employee => (
                        <p key={employee}>{employee.first_name}</p>
                    ))} */}
                </div>
        </div>
    )
}