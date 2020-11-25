import React, { Component, useState, useEffect } from "react";
import "./details.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StartButton from "../startButton/startButton";
import axios from "axios";

export default function Details(props) {
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

  const handleChange = callback => e => 
    callback(e.target.value);

  // const handleSave = (e) => {
  //   setState({ first_name: modalFirstName});    
  //   setState({ last_name: modalLastName});                         
  //   modalClose();
  // };

  const toggleEditForm = () => {
    setMyDetails(false);
    setEditForm(true);
    console.log(myDetails);
    console.log(editForm);
  };
  // set state for edit details form as false, onClick set to true
  // pass state? (or prop?) to details page, if true then display the edit details form

  return (
    <div>
      <span className="breadcrumbs"><a href="/">Home</a> > My Details</span>
      <div className="user-details">
        {/* <StartButton onClick={modalOpen}  /> */}
        <Router>
          <Link to="/edit-details">
            <button className="float-right" type="button" onClick={toggleEditForm}>Edit Details</button>
          </Link>
        </Router>

        {/* <a href="#" className="edit-details" onClick={modalOpen}>Edit details</a> */}
        {/* <Modal show={modal} handleClose={modalClose}>
            
          </Modal> */}
        <div>{myDetails ? userInfo : <EditDetails firstName={employee.first_name}/>}</div>
      </div>
    </div>
  );
};

function EditDetails({firstName}) {
  return (
    <div>
      <form>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          name="modalFirstName"
          // onChange={handleChange(setFirstName)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          value=""
          name="modalLastName"
          // onChange={handleChange(setModalLastName)}
          className="form-control"
        />
      </div>
      <div className="form-group">
      <Router>
      <Link to="/details">
        <button type="button" onClick="/details">Save</button>
        </Link>
        </Router>
      </div>
      </form>
    </div>
  )
}

