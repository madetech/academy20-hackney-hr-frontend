import React from 'react';
import "./visitorPage.css"

export default function VisitorPage() {
    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>Visitor Registration</h1>
                    <p>Please enter your details and an employee will be with you shortly.</p>
                </div>
                <form data-testid="visitor-form">
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label htmlFor="ename">Employee name:</label><br/>
                    <input type="text" id="ename" name="ename"/><br/>
                    <label htmlFor="cnumber">Contact number:</label><br/>
                    <input type="text" id="cnumber" name="cnumber"/><br/>
                    <label htmlFor="time">Time of arrival:</label><br/>
                    <input type="text" id="time" name="time"/><br/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </section>
            
        </div>
    )
}