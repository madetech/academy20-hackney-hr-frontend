import Home from "../../pages/home/home";
import React, { useState, useEffect } from "react";
import "./details.css"
import { BrowserRouter as Router, Link } from "react-router-dom";
import StartButton from '../startButton/startButton';
import App from "../../App";
import { render } from "react-dom";
import axios from "axios";

// let users = require("../../MOCK_DATA.json");


export default function Details(props) {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");

    const [jobTitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [office, setOffice] = useState("");

    const [streetAddress, setStreetAddress] = useState("");
    const [postcode, setPostcode] = useState("");

    const [kinFirstName, setKinFirstName] = useState("");
    const [kinLastName, setKinLastName] = useState("");

    const [employee, setEmployee] = useState("");

    useEffect(() => {
      axios.get('https://hackney-hr-backend.herokuapp.com/api/employee')
      .then(res => {
        setEmployee(res.data[0]);
      })
      .catch(err => {
        console.log(err)
      })
    }, []);

    // useEffect(() => {
    // const user = users.find(user => user.id === props.id);
    // if (user) {
    //     setFirstName(user.first_name);
    //     setSurname(user.last_name);
    //     setJobTitle(user.job_title);
    //     setEmail(user.contact_email);
    //     setSalary(user.salary);
    //     setOffice(user.office_location);
    //     setStreetAddress(user.street_address);
    //     setPostcode(user.postcode);
    //     setKinFirstName(user.next_of_kin_first_name);
    //     setKinLastName(user.next_of_kin_last_name);
    // }
    // }, [props.id]);

    // let userInfo = null;
    // if(firstName && surname && jobTitle && email && salary && office && streetAddress && postcode && kinFirstName && kinLastName) {
    const userInfo = (
        <div>
            <p><span>Name:</span> {employee.first_name} {employee.last_name}</p>  
            <p><span>Job title:</span> {employee.job_title}</p>
            <p><span>Email:</span> {employee.contact_email}</p> 
            <p><span>Salary:</span> Band B</p> 
            <p><span>Office:</span> {employee.office_location}</p>
            <p><span>Contact address:</span> 123 Reed Street, {employee.home_address_line_2}, {employee.home_address_city}</p>
            <p><span>Next of Kin:</span> Tim Cockrell</p> 
        </div> 
    )
    // }

  return (
    <Router forceRefresh={true}>
      <div className="back">
      <Link to="/">
        <StartButton text="Back to home"/>
      </Link>
      </div>
      <div>
     <span className="breadcrumbs">Home > My Details</span>
      <div className="user-details">
        <StartButton text="Edit my details"/>
        <div>{userInfo}</div>
      </div>
      </div>
    
    </Router>
  );
}
