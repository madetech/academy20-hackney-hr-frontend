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
            <div>
            <span className="breadcrumbs">Home > All Employees</span>
            <div className="user-details">
                <h2>All Employees</h2>
                { employee.map(e => (
                    <div key={e.id}>
                        <p><span>Name:</span> {e.first_name} {e.last_name}</p>  
                        <p><span>Job title:</span> {e.job_title}</p>
                        <p><span>Contact number:</span> {e.contact_number}</p> 
                        <p><span>Email:</span> {e.contact_email}</p> 
                        <p><span>Contact address:</span> {e.home_address_line_1}, {e.home_address_line_2}, {e.home_address_city}</p>
                        <p><span>Salary:</span> {e.salary_band}</p> 
                        <p><span>Office:</span> {e.office_location}</p>
                        <p><span>Manager:</span> {e.manager}</p> 
                        <p><span>Reportees:</span> {e.reportees}</p> 
                        <p><span>Next of Kin:</span> {e.next_of_kin_first_name} {e.next_of_kin_last_name}</p> 
                        <p><span>Next of Kin contact number:</span> {e.next_of_kin_contact_number}</p> 
                    <br/>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

