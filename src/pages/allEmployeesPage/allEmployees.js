import React, { useState, useEffect } from 'react';
import "./allEmployees.css";
import axios from "axios";
let users = require("../../MOCK_DATA.json")

export default function AllEmployees() {
    const [employee, setEmployee] = useState("");

    useEffect(() => {
        axios.get('https://hackney-hr-backend.herokuapp.com/api/employee')
        .then(res => {
          setEmployee(res.data);
        })
        .catch(err => {
          console.log(err)
        })
      }, []);

    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>All Employees</h1>
                    { employee.map(e => (
                        <div key={e.id}>
                            <p>{e.first_name} {e.last_name}</p>
                            <p>{e.job_title}</p>
                            <p>{e.office_location}</p>
                        <br/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}