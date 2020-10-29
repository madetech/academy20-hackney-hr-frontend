import React from 'react';
import "./Visitor.css"

export default function VisitorPage() {
    return(
        <div>
            <section>
                <div className="welcome-text">
                    <h1>Visitor Registration</h1>
                    <p>Please enter your details and an employee will be with you shortly.</p>
                </div>
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label for="ename">Employee name:</label><br/>
                    <input type="text" id="ename" name="ename"/><br/>
                    <label for="cnumber">Contact number:</label><br/>
                    <input type="text" id="cnumber" name="cnumber"/><br/>
                    <label for="time">Time of arrival:</label><br/>
                    <input type="text" id="time" name="time"/><br/><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </section>
            
        </div>
    )
}