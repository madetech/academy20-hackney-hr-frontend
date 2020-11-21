import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./allEmployees.css";
import axios from "axios";
import StartButton from '../../components/startButton/startButton';
let users = require("../../MOCK_DATA.json")

export default function AllEmployees() {
    const [employee, setEmployee] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://hackney-hr-backend.herokuapp.com/api/employee')
        .then(res => {
          setEmployee(res.data)
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err)
        })
      }, []);

    if (isLoading) {
        return <p>Page is loading</p>
    } else {
        return(
            <Router forceRefresh={true}>
             <div className="back">
                <Link to="/">
                    <StartButton text="Back to home"/>
                </Link>
            <div>
            <span className="breadcrumbs">Home > All Employees</span>
            <div className="user-details">
                <h2>All Employees</h2>
                { employee.map(e => (
                    <div key={e.id}>
                        <p><span>Name:</span> {e.first_name} {e.last_name}</p>  
                        <p><span>Job title:</span> {e.job_title}</p>
                        <p><span>Email:</span> {e.contact_email}</p> 
                        <p><span>Salary:</span> Band B</p> 
                        <p><span>Office:</span> {e.office_location}</p>
                        <p><span>Contact address:</span> 123 Reed Street, {e.home_address_line_2}, {e.home_address_city}</p>
                        <p><span>Next of Kin:</span> Tim Cockrell</p> 
                    <br/>
                    </div>
                ))}
            </div>
            </div>
            </div>
            </Router>
        )
    }
}

