import React, { Component, useState, useEffect } from "react";
import "./details.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StartButton from "../startButton/startButton";
import SubmitButton from "../submitButton/submitButton";
import getState from "../submitDetails/submitDetails";
import axios from "axios";

function Details(props) {
  const [employee, setEmployee] = useState("");
  const [firstName, setFirstName] = useState(employee.first_name);
  const [myDetails, setMyDetails] = useState(true);
  const [editForm, setEditForm] = useState(false);

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

  useEffect(() => {
    setFirstName(employee.first_name);
  }, [employee]);

  const toggleEditForm = () => {
    setMyDetails(false);
    setEditForm(true);
    console.log(myDetails);
    console.log(editForm);
  };

  const userInfo = (
    <div>
      <Router>
        <Link to="/edit-details">
          <button
            id="edit-details"
            type="button"
            onClick={toggleEditForm}
          >
            Edit Details
          </button>
        </Link>
      </Router>
      <div className="detail-fields">
      <p>
        <span>Name:</span> {employee.first_name} {employee.last_name}
      </p>
      <p>
        <span>Job title:</span> {employee.job_title}
      </p>
      <p>
        <span>Contact number:</span> {employee.contact_number}
      </p>
      <p>
        <span>Email:</span> {employee.contact_email}
      </p>
      <p>
        <span>Contact address:</span> {employee.home_address_line_1},{" "}
        {employee.home_address_line_2}, {employee.home_address_city},{" "}
        {employee.home_address_postcode}
      </p>
      <p>
        <span>Salary:</span> {employee.salary_band}
      </p>
      <p>
        <span>Office:</span> {employee.office_location}
      </p>
      <p>
        <span>Manager:</span> {employee.manager}
      </p>
      <p>
        <span>Reportees:</span> {employee.reportees}
      </p>
      <p>
        <span>Next of Kin:</span> {employee.next_of_kin_first_name}{" "}
        {employee.next_of_kin_last_name}
      </p>
      <p>
        <span>Next of Kin contact number:</span>{" "}
        {employee.next_of_kin_contact_number}
      </p>
      </div>
    </div>
  );

  const handleChange = (callback) => (e) => callback(e.target.value);

  // const handleSave = (e) => {
  //   setState({ first_name: modalFirstName});
  //   setState({ last_name: modalLastName});
  //   modalClose();
  // };

  // set state for edit details form as false, onClick set to true
  // pass state? (or prop?) to details page, if true then display the edit details form

  return (
    <div>
      <span className="breadcrumbs">
        <a href="/">Home</a> > My Details
      </span>
      <div className="user-details">
        <div>{myDetails ? userInfo : <EditDetails employee={employee} />}</div>
      </div>
    </div>
  );
}

function EditDetails({ employee }) {
  const [firstName, setFirstName] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    firstName: employee.first_name,
    lastName: employee.last_name,
    jobTitle: employee.job_title,
    contactNumber: employee.contact_number,
    contactEmail: employee.contact_email,
    homeAddressLine1: employee.home_address_line_1,
    homeAddressLine2: employee.home_address_line_2,
    homeAddressCity: employee.home_address_city,
    homeAddressPostcode: employee.home_address_postcode,
    salaryBand: employee.salary_band,
    officeLocation: employee.office_location,
    manager: employee.manager,
    reportees: employee.reportees,
    nextOfKinFirstName: employee.next_of_kin_first_name,
    nextOfKinLastName: employee.next_of_kin_last_name,
    nextOfKinContactNumber: employee.next_of_kin_contact_number,
  });
  const [save, setSave] = useState("");

  const handleSave = (event) => {
    event.preventDefault();
    setSave("Details saved!");
  };

  function changeEmployeeInfo(e) {
    console.log(e);
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  }
  console.log(newEmployee.firstName);

  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label className="form-label">First Name: </label>
          <input
            type="text"
            value={newEmployee.firstName}
            name="firstName"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name: </label>
          <input
            type="text"
            value={newEmployee.lastName}
            name="lastName"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Job title: </label>
          <input
            type="text"
            value={newEmployee.jobTitle}
            name="jobTitle"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact number: </label>
          <input
            type="number"
            value={newEmployee.contactNumber}
            name="contactNumber"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email: </label>
          <input
            type="text"
            value={newEmployee.contactEmail}
            name="contactEmail"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Address Line 1: </label>
          <input
            type="text"
            value={newEmployee.homeAddressLine1}
            name="homeAddressLine1"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Address Line 2: </label>
          <input
            type="text"
            value={newEmployee.homeAddressLine2}
            name="homeAddressLine2"
            onChange={changeEmployeeInfo}
            className="form-control2"
            size="10"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Address Line City: </label>
          <input
            type="text"
            value={newEmployee.homeAddressCity}
            name="homeAddressCity"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contact Address Postcode: </label>
          <input
            type="text"
            value={newEmployee.homeAddressPostcode}
            name="homeAddressPostcode"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Salary Band: </label>
          <input
            type="text"
            value={newEmployee.salaryBand}
            name="salaryBand"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Manager: </label>
          <input
            type="text"
            value={newEmployee.manager}
            name="manager"
            onChange={changeEmployeeInfo}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Reportees: </label>
          <input
            type="text"
            value={newEmployee.reportees}
            name="reportees"
            onChange={changeEmployeeInfo}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Next of Kin First Name: </label>
          <input
            type="text"
            value={newEmployee.nextOfKinFirstName}
            name="nextOfKinFirstName"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Next of Kin Last Name: </label>
          <input
            type="text"
            value={newEmployee.nextOfKinLastName}
            name="nextOfKinLastName"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Next of Kin Contact Number: </label>
          <input
            type="number"
            value={newEmployee.nextOfKinContactNumber}
            name="nextOfKinContactNumber"
            onChange={changeEmployeeInfo}
            className="form-control"
            required
          />
        </div>
        <div className="form-group"></div>
        <Router>
      <Link to="/employees">
        <button id="save-button" type="button" onClick={handleSave}>Save</button>
        </Link>
        </Router>
        <div>{save}</div>
      </form>
      <span className="details-back">
        <a href="/details"> {"<"} Back</a>
      </span>
      {/* <span>
      <Router>
      <Link to="/details">
        <button type="button" onClick={handleSave}>Save</button>
        </Link>
        </Router>
        </span> */}
    </div>
  );
}

export {Details, EditDetails};
