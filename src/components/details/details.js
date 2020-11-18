import React, { useState, useEffect } from "react";
import "./details.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartButton from '../startButton/startButton';
import App from "../../App";
let users = require("../../MOCK_DATA.json");

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

    useEffect(() => {
    const user = users.find(user => user.id === props.id);
    if (user) {
        setFirstName(user.first_name);
        setSurname(user.last_name);
        setJobTitle(user.job_title);
        setEmail(user.contact_email);
        setSalary(user.salary);
        setOffice(user.office_location);
        setStreetAddress(user.street_address);
        setPostcode(user.postcode);
        setKinFirstName(user.next_of_kin_first_name);
        setKinLastName(user.next_of_kin_last_name);
    }
    }, [props.id]);

    // let userInfo = null;
    // if(firstName && surname && jobTitle && email && salary && office && streetAddress && postcode && kinFirstName && kinLastName) {
    const userInfo = (
        <div>
            <p><span>Name:</span> {firstName} {surname}</p>  
            <p><span>Job title:</span> {jobTitle}</p>
            <p><span>Email:</span> {email}</p> 
            <p><span>Salary:</span> {salary}</p> 
            <p><span>Office:</span> {office}</p>
            <p><span>Contact address:</span> {streetAddress}, {postcode}</p>
            <p><span>Next of Kin:</span> {kinFirstName} {kinLastName}</p> 
        </div> 
    )
    // }

  return (
    <Router>
      <Route exact path="/"/>
    <div>
      {/* <Link to="/">
        <StartButton text="Back to home"/>
      </Link> */}
      <div className="user-details">
        <StartButton text="Edit my details"/>
        <div>{userInfo}</div>
      </div>
    </div>
    </Router>
  );
}
