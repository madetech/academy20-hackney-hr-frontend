import React from "react";
import "./visitorPage.css";
import VisitorForm from "../../components/visitorForm/visitorForm";
import { BrowserRouter as Router, Link } from "react-router-dom";
import StartButton from "../../components/startButton/startButton";

export default function VisitorPage() {
  return (
    <div>
      <section>
        <Router forceRefresh={true}>
          <Link to="/">
              <StartButton text="Back to home"/>
          </Link>
        </Router>
        <span className="breadcrumbs">Home > Visitor Registration</span>
        <div className="welcome-text">
          <h1>Visitor Registration</h1>
          <p>
            Please enter your details and an employee will be with you shortly.
          </p>
        </div>
        <VisitorForm />
      </section>
    </div>
  );
}
