import React, { useState, useEffect } from "react";
import "./details.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StartButton from "../startButton/startButton";
import axios from "axios";
import Modal from "../modal/modal";

export default function Details(props) {
  const [employee, setEmployee] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [modalInputName, setModalInputName] = useState("");
  const [state, setState] = useState({});

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

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setState({ [name]: value });
    console.log(state);
  };

  const handleSave = () => {
    setState({ name: modalInputName});                            
    modalClose();
  };
  
  const modalOpen = () => {
    setModal(true);
    console.log(modal);
  };

  const modalClose = () => {
    setModalInputName("");
    setModal(false);
    console.log(modal);
  };

  return (
    <div>
      <span className="breadcrumbs"><a href="/">Home</a> > My Details</span>
        <div className="user-details">
          <a href="#" onClick={modalOpen}>Open sesame</a>
          <Modal show={modal} handleClose={modalClose}>
            Hello
            <div className="form-group">
              <label>Enter name:</label>
              <input 
                type="text"
                value={modalInputName}
                name="modalInputName"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button onClick={handleSave} type="button">Save</button>
            </div>
          </Modal>
        <div>{userInfo}</div>
      </div>
    </div>
  );
}
