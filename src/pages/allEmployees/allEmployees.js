import React from 'react';
import "./allEmployees.css";
let users = require("../../MOCK_DATA.json")

export default function AllEmployees() {
    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>All Employees</h1>
                    { users.map(employee => (
                        <div key={employee.id}>
                            <p>{employee.first_name} {employee.last_name}</p>
                            <p>{employee.job_title}</p>
                            <p>{employee.office_location}</p>
                        <br/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}