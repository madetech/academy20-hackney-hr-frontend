import React, { useState, useEffect } from "react";
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
    console.log(user);
    if (user) {
        setFirstName(user.first_name);
        setSurname(user.surname);
        setJobTitle(user.job_title);
        setEmail(user.email);
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
            <p>Name: {firstName} {surname}</p>  
            <p>Job title: {jobTitle}</p>
            <p>Email: {email}</p> 
            <p>Salary: {salary}</p> 
            <p>Office: {office}</p>
            <p>Contact information: <br/>{streetAddress}
            <br/>{postcode}</p>
            <p>Next of Kin: {kinFirstName} {kinLastName}</p> 
        </div> 
    )
    // }

  return (
    <div>
      <p>{props.id}</p>
      <p>{userInfo}</p>
    </div>
  );
}
