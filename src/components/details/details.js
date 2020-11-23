import React, { useState, useEffect } from "react";
import "./details.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StartButton from "../startButton/startButton";
import axios from "axios";

export default function Details(props) {
  const [employee, setEmployee] = useState("");

  useEffect(() => {
    axios
      .get("https://hackney-hr-backend.herokuapp.com/api/employee")
      .then((res) => {
        setEmployee(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userInfo = (
    <div>
      <p><span>Name:</span> {employee.first_name} {employee.last_name}</p>
      <p><span>Job title:</span> {employee.job_title}</p>
      <p><span>Contact number:</span> {employee.contact_number}</p>
      <p><span>Email:</span> {employee.contact_email}</p>
      <p><span>Contact address:</span> {employee.home_address_line_1},{" "}
        {employee.home_address_line_2}, {employee.home_address_city},{" "}
        {employee.home_address_postcode}
      </p>
      <p><span>Salary:</span> {employee.salary_band}</p>
      <p><span>Office:</span> {employee.office_location}</p>
      <p><span>Manager:</span> {employee.manager}</p>
      <p><span>Reportees:</span> {employee.reportees}</p>
      <p><span>Next of Kin:</span> {employee.next_of_kin_first_name}{" "}
        {employee.next_of_kin_last_name}
      </p>
      <p><span>Next of Kin contact number:</span>{" "}
        {employee.next_of_kin_contact_number}
      </p>
    </div>
  );

  return (
    <div>
      <span className="breadcrumbs"><a href="/">Home</a> > My Details</span>
      <div className="user-details">
        <StartButton text="Edit my details" />
        <div>{userInfo}</div>
      </div>
    </div>
  );
}
