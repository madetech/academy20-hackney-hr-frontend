import React from 'react';
import "./employeeDetails.css";
// import getUsers from "../../getUsers";
let users = require("../../MOCK_DATA.json")

export default function EmployeeDetails() {
    return(
        <div>
                <div className="welcome-text">
                    <h1>Employee Details</h1>
                    {/*we will need to add id as another param in employee*/}
                    {users.map(employee => (
                        <p key={employee}>{employee.first_name}</p>
                    ))}
                    <p>Lenette Enrique</p> 
                </div>
        </div>
    )
}