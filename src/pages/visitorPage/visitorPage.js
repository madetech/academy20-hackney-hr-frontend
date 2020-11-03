import React from 'react';
import "./visitorPage.css"
import VisitorForm from "../../components/visitorForm/visitorForm";

export default function VisitorPage() {
    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>Visitor Registration</h1>
                    <p>Please enter your details and an employee will be with you shortly.</p>
                </div>
                <VisitorForm />
            </section>
            
        </div>
    )
}