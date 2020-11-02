import React from 'react';
import "./employeeDetails.css";
import getUsers from "../../getUsers";

export default function EmployeeDetails() {
    return(
        <div>
                <div className="welcome-text">
                    {console.log(getUsers)}
                    <h1>Employee Details</h1>
                    {getUsers().map(employee => (
                        <p>{employee.first_name}</p>
                    ))}
                </div>
        </div>
    )
}