import React from 'react';
import "./employeeDetails.css";
// import getUsers from "../../getUsers";
let users = require("../../MOCK_DATA.json")

export default function EmployeeDetails() {
    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>Employee Details</h1>
                    <p>Name: {users[0].first_name} {users[0].last_name}</p>  
                    <p>Job title: {users[0]["Job Title"]}</p>
                    <p>Email: {users[0]["contact email"]}</p> 
                    <p>Salary: {users[0].Salary}</p> 
                    <p>Office: {users[0]["Office Location"]}</p>
                    <p>Contact information: <br/>{users[0]["Street Number"]}
                        <br/>{users[0]["Street Name"]}
                        <br/>{users[0]["Post Code"]}</p>
                    {console.log(users[0])}
                    {/*we will need to add id as another param in employee*/}
                    {/* {users.map(employee => (
                        <p key={employee}>{employee.first_name}</p>
                    ))} */}
                </div>
            </section>
        </div>
    )
}