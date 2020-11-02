import React from 'react';
import "./allEmployees.css";
// import getUsers from "../../getUsers";
let users = require("../../MOCK_DATA.json")

export default function AllEmployees() {
    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>All Employees</h1>
                    {/*we will need to add id as another param in employee*/}
                    { users.map(employee => (
                        <div key={employee}>
                            <p>{employee.first_name} {employee.last_name}</p>
                            <p>{employee["Job Title"]}</p>
                            <p>{employee["Office Location"]}</p>
                        <br/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}